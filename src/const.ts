export const CARD_VERSION = "1.0.3";

export const CARD_TYPE = "hassio-irrigation-card";
export const CARD_EDITOR_TYPE = "hassio-irrigation-card-editor";

export const DEFAULT_ZONE_ICON = "mdi:sprinkler-variant";
export const ZONE_ACTIVE_ICON = "mdi:sprinkler-variant";
export const MASTER_ICON_ON = "mdi:water-pump";
export const MASTER_ICON_OFF = "mdi:water-pump-off";

export const DEFAULT_INPUT_ICON = "mdi:electric-switch";

/**
 * Regexes matching the entity_id suffixes produced by ESPHome's `sprinkler:`
 * platform. Used by the editor's "auto-detect" helper - not required, the
 * card works fine with fully manual entity assignment too.
 */
export const ESPHOME_SPRINKLER_PATTERNS = {
  zoneSwitch: /^switch\.(.+)_zone_(\d+)$/,
  zoneEnableSwitch: /^switch\.(.+)_enable_zone_(\d+)$/,
  zoneDuration: /^number\.(.+)_zone_(\d+)_run_duration$/,
  autoAdvance: /^switch\.(.+)_auto_advance$/,
  reverse: /^switch\.(.+)_reverse$/,
  multiplier: /^number\.(.+)_multiplier$/,
  repeat: /^number\.(.+)_repeat$/,
  input: /^binary_sensor\.(.+)_(input_\d+|pad_(rx|tx)\d+_as_input)$/,
};
