import type { LovelaceCardConfig } from "custom-card-helpers";

export interface ZoneConfig {
  /** switch.* entity that opens/closes the valve */
  switch: string;
  /** Optional switch.* entity that includes/excludes this zone from the automatic sequence */
  enable_switch?: string;
  /** Optional number.* entity holding the zone's run duration in seconds */
  duration_number?: string;
  name?: string;
  icon?: string;
}

export interface InputConfig {
  entity: string;
  name?: string;
  icon?: string;
}

export interface IrrigationCardConfig extends LovelaceCardConfig {
  type: string;
  title?: string;

  /** Main switch that starts/stops the whole (multi-zone) irrigation run */
  controller_switch?: string;
  auto_advance_switch?: string;
  reverse_switch?: string;
  multiplier_number?: string;
  repeat_number?: string;

  /** Misc. device-level entities, all optional */
  internet_switch?: string;
  device_tracker?: string;

  /**
   * Optional lawn_mower.* entity. Whenever its state isn't "docked" (i.e.
   * the mower is out on the lawn), the master switch, zone tiles and
   * Program Settings all lock - stop-all stays active regardless.
   */
  lawnmower_entity?: string;

  zones: ZoneConfig[];
  inputs?: InputConfig[];

  show_diagnostics?: boolean;
  show_multiplier_preview?: boolean;
  /** Hides the per-zone duration +/- steppers to save space. */
  compact?: boolean;
  /** Start the Program Settings and Diagnostics panels collapsed. */
  start_collapsed?: boolean;
}

export interface ZoneRuntimeState {
  config: ZoneConfig;
  index: number;
  active: boolean;
  enabled: boolean;
  durationSeconds: number;
  effectiveDurationSeconds: number;
  remainingSeconds: number;
  progressPct: number;
  unavailable: boolean;
}
