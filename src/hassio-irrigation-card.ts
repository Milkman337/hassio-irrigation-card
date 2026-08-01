import { LitElement, html, nothing, type PropertyValues, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  fireEvent,
  type HomeAssistant,
  type LovelaceCard,
  type LovelaceCardEditor,
} from "custom-card-helpers";

import { cardStyles } from "./styles";
import {
  CARD_EDITOR_TYPE,
  CARD_TYPE,
  CARD_VERSION,
  DEFAULT_INPUT_ICON,
  DEFAULT_ZONE_ICON,
  MASTER_ICON_OFF,
  MASTER_ICON_ON,
} from "./const";
import {
  computeZoneRuntime,
  discoverSprinklerConfig,
  formatDuration,
  isOn,
  isUnavailable,
  numberState,
} from "./helpers";
import type { IrrigationCardConfig, ZoneRuntimeState } from "./types";

declare global {
  interface HTMLElementTagNameMap {
    [CARD_TYPE]: HassioIrrigationCard;
  }
  interface Window {
    customCards?: Array<Record<string, unknown>>;
  }
}

const TICK_MS = 1000;

@customElement(CARD_TYPE)
export class HassioIrrigationCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private _config!: IrrigationCardConfig;
  @state() private _now = Date.now();
  @state() private _programCollapsed = false;
  @state() private _diagnosticsCollapsed = true;
  @state() private _multiplierDraft: number | null = null;

  private _tickHandle?: ReturnType<typeof setInterval>;

  public static styles = cardStyles;

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import("./editor");
    return document.createElement(CARD_EDITOR_TYPE) as unknown as LovelaceCardEditor;
  }

  public static getStubConfig(hass: HomeAssistant): IrrigationCardConfig {
    const discovered = discoverSprinklerConfig(hass);
    if (discovered.zones.length > 0) {
      return {
        type: `custom:${CARD_TYPE}`,
        title: "Irrigation",
        ...discovered,
      } as IrrigationCardConfig;
    }
    return {
      type: `custom:${CARD_TYPE}`,
      title: "Irrigation",
      zones: [
        { switch: "switch.REPLACE_ME_zone_1", name: "Zone 1" },
        { switch: "switch.REPLACE_ME_zone_2", name: "Zone 2" },
      ],
    };
  }

  public setConfig(config: IrrigationCardConfig): void {
    if (!config) {
      throw new Error("Invalid configuration");
    }
    if (config.zones && !Array.isArray(config.zones)) {
      throw new Error("`zones` must be a list");
    }
    this._config = {
      show_diagnostics: true,
      show_multiplier_preview: true,
      compact: false,
      ...config,
      zones: config.zones ?? [],
    };
    this._programCollapsed = !!this._config.compact;
  }

  public getCardSize(): number {
    const zoneRows = Math.ceil((this._config?.zones?.length ?? 0) / 3);
    return 2 + zoneRows + (this._config?.show_diagnostics ? 2 : 0);
  }

  protected updated(changed: PropertyValues): void {
    super.updated(changed);
    const anyActive = this._zoneStates().some((z) => z.active);
    if (anyActive && !this._tickHandle) {
      this._tickHandle = setInterval(() => {
        this._now = Date.now();
      }, TICK_MS);
    } else if (!anyActive && this._tickHandle) {
      clearInterval(this._tickHandle);
      this._tickHandle = undefined;
    }
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._tickHandle) {
      clearInterval(this._tickHandle);
      this._tickHandle = undefined;
    }
  }

  private get _multiplier(): number {
    if (this._multiplierDraft !== null) return this._multiplierDraft;
    return numberState(this.hass, this._config.multiplier_number, 1);
  }

  private get _repeat(): number {
    return numberState(this.hass, this._config.repeat_number, 0);
  }

  private _zoneStates(): ZoneRuntimeState[] {
    if (!this.hass || !this._config) return [];
    return this._config.zones.map((z, i) =>
      computeZoneRuntime(this.hass, z, i, this._multiplier, this._now)
    );
  }

  private get _estimateTotalSeconds(): number {
    const sum = this._zoneStates()
      .filter((z) => z.enabled)
      .reduce((acc, z) => acc + z.effectiveDurationSeconds, 0);
    return sum * (this._repeat + 1);
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) return html``;

    const zoneStates = this._zoneStates();
    const anyActive = zoneStates.some((z) => z.active);
    const activeZone = zoneStates.find((z) => z.active);
    const controllerConfigured = !!this._config.controller_switch;
    const controllerOn = controllerConfigured
      ? isOn(this.hass, this._config.controller_switch)
      : false;
    const trackerConfigured = !!this._config.device_tracker;
    const trackerOnline = trackerConfigured
      ? this.hass.states[this._config.device_tracker!]?.state === "home"
      : undefined;

    return html`
      <ha-card>
        <div class="header">
          <div class="header-title">
            <ha-icon icon=${anyActive ? MASTER_ICON_ON : MASTER_ICON_OFF}></ha-icon>
            <h1>${this._config.title ?? "Irrigation"}</h1>
          </div>
          <div style="display:flex; gap:6px; align-items:center;">
            ${
              anyActive
                ? html`<span class="status-pill running"
                    >Running${activeZone ? `: ${this._zoneLabel(activeZone)}` : ""}</span
                  >`
                : html`<span class="status-pill">Idle</span>`
            }
            ${
              trackerConfigured
                ? html`<span class="status-pill ${trackerOnline ? "online" : "offline"}"
                    >${trackerOnline ? "Online" : "Offline"}</span
                  >`
                : nothing
            }
          </div>
        </div>

        ${controllerConfigured ? this._renderMasterRow(controllerOn, zoneStates) : nothing}
        ${zoneStates.length > 0 ? this._renderZones(zoneStates) : this._renderEmptyState()}
        ${this._renderProgramPanel()}
        ${this._config.show_diagnostics ? this._renderDiagnosticsPanel() : nothing}
      </ha-card>
    `;
  }

  private _zoneLabel(zone: ZoneRuntimeState): string {
    return (
      zone.config.name ??
      this.hass.states[zone.config.switch]?.attributes?.friendly_name ??
      `Zone ${zone.index + 1}`
    );
  }

  private _renderEmptyState(): TemplateResult {
    return html`
      <div class="empty-state">
        <ha-icon icon="mdi:sprinkler-variant" style="--mdc-icon-size: 32px;"></ha-icon>
        <span>No zones configured yet. Edit this card to add your irrigation zones.</span>
      </div>
    `;
  }

  private _renderMasterRow(controllerOn: boolean, zoneStates: ZoneRuntimeState[]): TemplateResult {
    return html`
      <div class="master-row">
        <mwc-button
          class="master-button"
          raised
          @click=${() => this._toggleSwitch(this._config.controller_switch!)}
        >
          <ha-icon slot="icon" icon=${controllerOn ? "mdi:stop" : "mdi:play"}></ha-icon>
          ${controllerOn ? "Stop Program" : "Start Program"}
        </mwc-button>
        <ha-icon-button
          class="stop-all"
          title="Emergency stop - closes every valve immediately"
          @click=${() => this._stopAll(zoneStates)}
        >
          <ha-icon icon="mdi:alert-octagon-outline"></ha-icon>
        </ha-icon-button>
      </div>
    `;
  }

  private _renderZones(zoneStates: ZoneRuntimeState[]): TemplateResult {
    return html`
      <div class="zones-grid">${zoneStates.map((zone) => this._renderZoneTile(zone))}</div>
    `;
  }

  private _renderZoneTile(zone: ZoneRuntimeState): TemplateResult {
    const classes = [
      "zone-tile",
      zone.active ? "active" : "",
      !zone.enabled ? "disabled" : "",
      zone.unavailable ? "unavailable" : "",
    ]
      .filter(Boolean)
      .join(" ");

    const stateLabel = zone.unavailable
      ? "Unavailable"
      : zone.active
        ? `${formatDuration(zone.remainingSeconds)} left`
        : !zone.enabled
          ? "Disabled"
          : zone.config.duration_number
            ? `Off · ${formatDuration(zone.durationSeconds)}`
            : "Off";

    return html`
      <div
        class=${classes}
        role="button"
        tabindex="0"
        @click=${() => !zone.unavailable && this._toggleSwitch(zone.config.switch)}
        @keydown=${(e: KeyboardEvent) => {
          if ((e.key === "Enter" || e.key === " ") && !zone.unavailable) {
            e.preventDefault();
            this._toggleSwitch(zone.config.switch);
          }
        }}
      >
        <div class="zone-top">
          <ha-icon class="zone-icon" icon=${zone.config.icon ?? DEFAULT_ZONE_ICON}></ha-icon>
          ${
            zone.config.enable_switch
              ? html`<ha-switch
                  class="zone-enable"
                  .checked=${zone.enabled}
                  @click=${(e: Event) => e.stopPropagation()}
                  @change=${() => this._toggleSwitch(zone.config.enable_switch!)}
                ></ha-switch>`
              : nothing
          }
        </div>
        <span class="zone-name" @click=${(e: Event) => this._openMoreInfo(e, zone.config.switch)}
          >${this._zoneLabel(zone)}</span
        >
        <span class="zone-state">${stateLabel}</span>
        ${
          !zone.active && zone.config.duration_number && !this._config.compact
            ? this._renderDurationStepper(zone)
            : nothing
        }
        ${
          zone.active
            ? html`<div class="zone-progress"><div style="width:${zone.progressPct}%"></div></div>`
            : nothing
        }
      </div>
    `;
  }

  private _renderDurationStepper(zone: ZoneRuntimeState): TemplateResult {
    const entity = zone.config.duration_number!;
    return html`
      <div class="zone-duration-row">
        <span>${formatDuration(zone.durationSeconds)}</span>
        <div class="stepper">
          <ha-icon-button @click=${(e: Event) => this._stepNumber(e, entity, -30)}>
            <ha-icon icon="mdi:minus"></ha-icon>
          </ha-icon-button>
          <ha-icon-button @click=${(e: Event) => this._stepNumber(e, entity, 30)}>
            <ha-icon icon="mdi:plus"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
    `;
  }

  private _renderProgramPanel(): TemplateResult | typeof nothing {
    const cfg = this._config;
    const hasAny =
      cfg.auto_advance_switch || cfg.reverse_switch || cfg.multiplier_number || cfg.repeat_number;
    if (!hasAny) return nothing;

    const multAttrs = cfg.multiplier_number
      ? this.hass.states[cfg.multiplier_number]?.attributes
      : undefined;
    const multMin = multAttrs?.min ?? 0;
    const multMax = multAttrs?.max ?? 10;
    const multStep = multAttrs?.step ?? 0.1;

    return html`
      <section class="panel">
        <div
          class="panel-header ${this._programCollapsed ? "collapsed" : ""}"
          @click=${() => (this._programCollapsed = !this._programCollapsed)}
        >
          <h2>Program Settings</h2>
          <ha-icon icon="mdi:chevron-down"></ha-icon>
        </div>
        ${
          this._programCollapsed
            ? nothing
            : html`
                <div class="panel-body">
                  ${
                    cfg.auto_advance_switch
                      ? this._renderSettingSwitch(
                          cfg.auto_advance_switch,
                          "Auto-advance",
                          "Automatically move on to the next enabled zone"
                        )
                      : nothing
                  }
                  ${
                    cfg.reverse_switch
                      ? this._renderSettingSwitch(
                          cfg.reverse_switch,
                          "Reverse order",
                          "Run the zone sequence back to front"
                        )
                      : nothing
                  }
                  ${
                    cfg.multiplier_number
                      ? html`
                          <div
                            class="setting-row"
                            style="flex-direction:column; align-items:stretch; gap:4px;"
                          >
                            <div class="setting-label">
                              <span class="primary">Duration multiplier</span>
                              <span class="secondary"
                                >Scales every zone's run time, e.g. for the season</span
                              >
                            </div>
                            <div class="slider-row">
                              <input
                                type="range"
                                min=${multMin}
                                max=${multMax}
                                step=${multStep}
                                .value=${String(this._multiplier)}
                                @input=${(e: InputEvent) => {
                                this._multiplierDraft = Number(
                                  (e.target as HTMLInputElement).value
                                );
                              }}
                                @change=${(e: Event) => {
                                const value = Number((e.target as HTMLInputElement).value);
                                this._setNumber(cfg.multiplier_number!, value);
                                this._multiplierDraft = null;
                              }}
                              />
                              <span class="slider-value">×${this._multiplier.toFixed(1)}</span>
                            </div>
                          </div>
                        `
                      : nothing
                  }
                  ${cfg.repeat_number ? this._renderRepeatStepper(cfg.repeat_number) : nothing}
                  ${
                    cfg.show_multiplier_preview !== false
                      ? html`<span class="estimate"
                          >Estimated total runtime:
                          ${formatDuration(this._estimateTotalSeconds)}</span
                        >`
                      : nothing
                  }
                </div>
              `
        }
      </section>
    `;
  }

  private _renderSettingSwitch(entity: string, label: string, secondary: string): TemplateResult {
    return html`
      <div class="setting-row">
        <div class="setting-label">
          <span class="primary">${label}</span>
          <span class="secondary">${secondary}</span>
        </div>
        <ha-switch
          .checked=${isOn(this.hass, entity)}
          @change=${() => this._toggleSwitch(entity)}
        ></ha-switch>
      </div>
    `;
  }

  private _renderRepeatStepper(entity: string): TemplateResult {
    const attrs = this.hass.states[entity]?.attributes;
    const min = attrs?.min ?? 0;
    const max = attrs?.max ?? 10;
    const value = numberState(this.hass, entity, 0);
    return html`
      <div class="setting-row">
        <div class="setting-label">
          <span class="primary">Repeat cycles</span>
          <span class="secondary">How many extra times to repeat the whole program</span>
        </div>
        <div class="stepper">
          <ha-icon-button
            ?disabled=${value <= min}
            @click=${() => this._setNumber(entity, Math.max(min, value - 1))}
          >
            <ha-icon icon="mdi:minus"></ha-icon>
          </ha-icon-button>
          <span class="slider-value">${value}</span>
          <ha-icon-button
            ?disabled=${value >= max}
            @click=${() => this._setNumber(entity, Math.min(max, value + 1))}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
    `;
  }

  private _renderDiagnosticsPanel(): TemplateResult | typeof nothing {
    const cfg = this._config;
    const hasAny =
      (cfg.inputs && cfg.inputs.length > 0) || cfg.internet_switch || cfg.device_tracker;
    if (!hasAny) return nothing;

    return html`
      <section class="panel">
        <div
          class="panel-header ${this._diagnosticsCollapsed ? "collapsed" : ""}"
          @click=${() => (this._diagnosticsCollapsed = !this._diagnosticsCollapsed)}
        >
          <h2>Diagnostics</h2>
          <ha-icon icon="mdi:chevron-down"></ha-icon>
        </div>
        ${
          this._diagnosticsCollapsed
            ? nothing
            : html`
                <div class="panel-body">
                  ${
                    cfg.inputs && cfg.inputs.length > 0
                      ? html`
                          <div class="chips">
                            ${cfg.inputs.map((input) => {
                            const on = isOn(this.hass, input.entity);
                            const name =
                              input.name ??
                              this.hass.states[input.entity]?.attributes?.friendly_name ??
                              input.entity;
                            return html`
                              <span
                                class="chip ${on ? "on" : ""}"
                                @click=${(e: Event) => this._openMoreInfo(e, input.entity)}
                              >
                                <ha-icon icon=${input.icon ?? DEFAULT_INPUT_ICON}></ha-icon>
                                ${name}
                              </span>
                            `;
                          })}
                          </div>
                        `
                      : nothing
                  }
                  ${cfg.internet_switch ? this._renderSettingSwitch(cfg.internet_switch, "Internet access", "Device network/API access") : nothing}
                  ${cfg.device_tracker ? this._renderTrackerRow(cfg.device_tracker) : nothing}
                </div>
              `
        }
      </section>
    `;
  }

  private _renderTrackerRow(entity: string): TemplateResult {
    const st = this.hass.states[entity];
    const online = st?.state === "home";
    const ip = st?.attributes?.ip as string | undefined;
    return html`
      <div
        class="setting-row"
        @click=${(e: Event) => this._openMoreInfo(e, entity)}
        style="cursor:pointer;"
      >
        <div class="setting-label">
          <span class="primary">Controller connectivity</span>
          <span class="secondary">${ip ? `IP ${ip}` : entity}</span>
        </div>
        <span class="status-pill ${online ? "online" : "offline"}"
          >${online ? "Online" : "Offline"}</span
        >
      </div>
    `;
  }

  private _toggleSwitch(entityId: string): void {
    if (!entityId || isUnavailable(this.hass, entityId)) return;
    const domain = entityId.split(".")[0];
    this.hass.callService(domain, "toggle", { entity_id: entityId });
  }

  private _setNumber(entityId: string, value: number): void {
    this.hass.callService("number", "set_value", { entity_id: entityId, value });
  }

  private _stepNumber(e: Event, entityId: string, delta: number): void {
    e.stopPropagation();
    const attrs = this.hass.states[entityId]?.attributes;
    const min = attrs?.min ?? 0;
    const max = attrs?.max ?? 86400;
    const current = numberState(this.hass, entityId, 0);
    const next = Math.min(max, Math.max(min, current + delta));
    this._setNumber(entityId, next);
  }

  private _stopAll(zoneStates: ZoneRuntimeState[]): void {
    const entityIds = [
      this._config.controller_switch,
      ...zoneStates.map((z) => z.config.switch),
    ].filter((id): id is string => !!id);
    if (entityIds.length === 0) return;
    this.hass.callService("switch", "turn_off", { entity_id: entityIds });
  }

  private _openMoreInfo(e: Event, entityId: string): void {
    e.stopPropagation();
    fireEvent(this, "hass-more-info", { entityId });
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: CARD_TYPE,
  name: "Irrigation / Sprinkler Card",
  description:
    "A polished card for ESPHome-based sprinkler/irrigation controllers, with live progress, program settings and diagnostics.",
  preview: true,
});

// eslint-disable-next-line no-console
console.info(
  `%c HASSIO-IRRIGATION-CARD %c v${CARD_VERSION} `,
  "color: white; background: #03a9f4; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 4px;",
  "color: #03a9f4; background: white; font-weight: 700; border-radius: 0 3px 3px 0; padding: 2px 4px;"
);
