import type { HomeAssistant } from "custom-card-helpers";
import { ESPHOME_SPRINKLER_PATTERNS } from "./const";
import type { InputConfig, IrrigationCardConfig, ZoneConfig, ZoneRuntimeState } from "./types";

export function formatDuration(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const parts: string[] = [];
  if (h > 0) parts.push(`${h}h`);
  if (h > 0 || m > 0) parts.push(`${m}m`);
  parts.push(`${sec}s`);
  return parts.join(" ");
}

export function numberState(hass: HomeAssistant, entityId?: string, fallback = 0): number {
  if (!entityId) return fallback;
  const st = hass.states[entityId];
  if (!st || st.state === "unknown" || st.state === "unavailable") return fallback;
  const n = Number(st.state);
  return Number.isFinite(n) ? n : fallback;
}

export function isOn(hass: HomeAssistant, entityId?: string): boolean {
  if (!entityId) return false;
  return hass.states[entityId]?.state === "on";
}

export function isUnavailable(hass: HomeAssistant, entityId?: string): boolean {
  if (!entityId) return true;
  const st = hass.states[entityId];
  return !st || st.state === "unavailable";
}

/**
 * Computes live progress/remaining-time for a zone. `now` is passed in
 * (rather than read internally) so the caller can drive a single shared
 * ticking clock for all zones without each of them creating timers.
 */
export function computeZoneRuntime(
  hass: HomeAssistant,
  config: ZoneConfig,
  index: number,
  multiplier: number,
  now: number
): ZoneRuntimeState {
  const switchState = hass.states[config.switch];
  const active = switchState?.state === "on";
  const enabled = config.enable_switch ? isOn(hass, config.enable_switch) : true;
  const baseDuration = numberState(hass, config.duration_number, 0);
  const effectiveDuration = Math.max(0, baseDuration * multiplier);

  let remaining = effectiveDuration;
  let progressPct = 0;

  if (active && switchState?.last_changed) {
    const startedAt = new Date(switchState.last_changed).getTime();
    const elapsed = Math.max(0, (now - startedAt) / 1000);
    remaining = Math.max(0, effectiveDuration - elapsed);
    progressPct = effectiveDuration > 0 ? Math.min(100, (elapsed / effectiveDuration) * 100) : 0;
  }

  return {
    config,
    index,
    active,
    enabled,
    durationSeconds: baseDuration,
    effectiveDurationSeconds: effectiveDuration,
    remainingSeconds: remaining,
    progressPct,
    unavailable: isUnavailable(hass, config.switch),
  };
}

/**
 * Best-effort auto-detection of a full controller config from a common
 * entity_id prefix, matching the entity naming produced by ESPHome's
 * `sprinkler:` platform (e.g. entities like
 * `switch.garten_sprengler_controller_zone_1`). Used by the visual editor's
 * "auto-detect" button. Returns `null` fields for anything it can't find -
 * the user can always fill those in manually.
 */
export function discoverSprinklerConfig(
  hass: HomeAssistant,
  prefixHint?: string
): Partial<IrrigationCardConfig> & { zones: ZoneConfig[]; inputs: InputConfig[] } {
  const entityIds = Object.keys(hass.states).filter((id) =>
    prefixHint ? id.includes(prefixHint) : true
  );

  const zonesByIndex = new Map<number, ZoneConfig>();
  let autoAdvance: string | undefined;
  let reverse: string | undefined;
  let multiplier: string | undefined;
  let repeat: string | undefined;
  const inputs: InputConfig[] = [];
  const candidateMains: string[] = [];

  for (const id of entityIds) {
    let m: RegExpMatchArray | null;

    if ((m = id.match(ESPHOME_SPRINKLER_PATTERNS.zoneSwitch))) {
      const idx = Number(m[2]);
      const zone = zonesByIndex.get(idx) ?? ({ switch: "" } as ZoneConfig);
      zone.switch = id;
      zone.name = `Zone ${idx}`;
      zonesByIndex.set(idx, zone);
      continue;
    }
    if ((m = id.match(ESPHOME_SPRINKLER_PATTERNS.zoneEnableSwitch))) {
      const idx = Number(m[2]);
      const zone = zonesByIndex.get(idx) ?? ({ switch: "" } as ZoneConfig);
      zone.enable_switch = id;
      zonesByIndex.set(idx, zone);
      continue;
    }
    if ((m = id.match(ESPHOME_SPRINKLER_PATTERNS.zoneDuration))) {
      const idx = Number(m[2]);
      const zone = zonesByIndex.get(idx) ?? ({ switch: "" } as ZoneConfig);
      zone.duration_number = id;
      zonesByIndex.set(idx, zone);
      continue;
    }
    if (ESPHOME_SPRINKLER_PATTERNS.autoAdvance.test(id)) {
      autoAdvance = id;
      continue;
    }
    if (ESPHOME_SPRINKLER_PATTERNS.reverse.test(id)) {
      reverse = id;
      continue;
    }
    if (ESPHOME_SPRINKLER_PATTERNS.multiplier.test(id)) {
      multiplier = id;
      continue;
    }
    if (ESPHOME_SPRINKLER_PATTERNS.repeat.test(id)) {
      repeat = id;
      continue;
    }
    if (ESPHOME_SPRINKLER_PATTERNS.input.test(id)) {
      inputs.push({ entity: id });
      continue;
    }
    if (id.startsWith("switch.") && (!prefixHint || id.includes(prefixHint))) {
      candidateMains.push(id);
    }
  }

  // The main controller switch is whichever remaining switch shares the
  // longest common prefix with the auto_advance/reverse switches once those
  // suffixes are stripped - by construction, exactly the switch ESPHome
  // names after the sprinkler component itself.
  const zoneSwitchIds = new Set([...zonesByIndex.values()].map((z) => z.switch));

  let controllerSwitch: string | undefined;
  const stem = (autoAdvance ?? reverse)?.replace(/_(auto_advance|reverse)$/, "");
  if (stem) {
    controllerSwitch = candidateMains.find((id) => id === stem || id.startsWith(stem));
  }
  if (!controllerSwitch) {
    controllerSwitch = candidateMains.find(
      (id) => !zoneSwitchIds.has(id) && !id.includes("internet")
    );
  }

  const internetSwitch = candidateMains.find((id) => id.includes("internet"));

  const zones = [...zonesByIndex.entries()]
    .sort(([a], [b]) => a - b)
    .map(([, z]) => z)
    .filter((z) => !!z.switch);

  const deviceTracker = entityIds.find(
    (id) => id.startsWith("device_tracker.") && (!prefixHint || id.includes(prefixHint))
  );

  return {
    controller_switch: controllerSwitch,
    auto_advance_switch: autoAdvance,
    reverse_switch: reverse,
    multiplier_number: multiplier,
    repeat_number: repeat,
    internet_switch: internetSwitch,
    device_tracker: deviceTracker,
    zones,
    inputs,
  };
}
