import { LitElement, html, css, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent, type HomeAssistant, type LovelaceCardEditor } from "custom-card-helpers";

import { CARD_EDITOR_TYPE } from "./const";
import { discoverSprinklerConfig } from "./helpers";
import { localize } from "./localize/localize";
import type { InputConfig, IrrigationCardConfig, ZoneConfig } from "./types";

interface EntityPickerChangeEvent extends CustomEvent {
  detail: { value: string };
}

@customElement(CARD_EDITOR_TYPE)
export class HassioIrrigationCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private _config!: IrrigationCardConfig;
  @state() private _prefixHint = "";

  public setConfig(config: IrrigationCardConfig): void {
    this._config = { ...config, zones: config.zones ?? [] };
  }

  static styles = css`
    .section {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 20px;
    }
    h3 {
      font-size: 0.95rem;
      font-weight: 600;
      margin: 0 0 2px 0;
      color: var(--primary-text-color);
    }
    .hint {
      font-size: 0.78rem;
      color: var(--secondary-text-color);
      margin: 0 0 4px 0;
    }
    .row {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    .item-card {
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .item-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .item-header b {
      font-size: 0.85rem;
    }
    ha-icon-button.remove {
      color: var(--error-color, #f44336);
    }
    ha-formfield {
      display: block;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      align-self: flex-start;
      height: 36px;
      padding: 0 14px;
      border: 1px solid var(--primary-color);
      border-radius: 8px;
      background: transparent;
      color: var(--primary-color);
      font-family: inherit;
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
    }
    .btn ha-icon {
      --mdc-icon-size: 18px;
    }
    .btn:hover {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
    }
    .btn:active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.16);
    }
  `;

  private _t(key: string, vars?: Record<string, string | number>): string {
    return localize(this.hass, key, vars);
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) return html``;

    return html`
      <div class="section">
        <h3>${this._t("editor.card.title")}</h3>
        <ha-textfield
          label=${this._t("editor.card.title_label")}
          .value=${this._config.title ?? ""}
          @input=${(e: Event) => this._set("title", (e.target as HTMLInputElement).value)}
        ></ha-textfield>
        <ha-formfield label=${this._t("editor.card.compact")}>
          <ha-switch
            .checked=${!!this._config.compact}
            @change=${(e: Event) => this._set("compact", (e.target as HTMLInputElement).checked)}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield label=${this._t("editor.card.start_collapsed")}>
          <ha-switch
            .checked=${!!this._config.start_collapsed}
            @change=${(e: Event) =>
              this._set("start_collapsed", (e.target as HTMLInputElement).checked)}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield label=${this._t("editor.card.show_diagnostics")}>
          <ha-switch
            .checked=${this._config.show_diagnostics !== false}
            @change=${(e: Event) => this._set("show_diagnostics", (e.target as HTMLInputElement).checked)}
          ></ha-switch>
        </ha-formfield>
      </div>

      <div class="section">
        <h3>${this._t("editor.auto_detect.title")}</h3>
        <p class="hint">
          ${this._t("editor.auto_detect.hint", { example: "garten_sprengler_controller" })}
        </p>
        <div class="row">
          <ha-textfield
            style="flex:1"
            label=${this._t("editor.auto_detect.prefix_label")}
            .value=${this._prefixHint}
            @input=${(e: Event) => (this._prefixHint = (e.target as HTMLInputElement).value)}
          ></ha-textfield>
          <button class="btn" @click=${this._autoDetect}>
            ${this._t("editor.auto_detect.button")}
          </button>
        </div>
      </div>

      <div class="section">
        <h3>${this._t("editor.controller.title")}</h3>
        ${this._entityPicker("controller_switch", this._t("editor.controller.controller_switch"), [
          "switch",
        ])}
        ${this._entityPicker(
          "auto_advance_switch",
          this._t("editor.controller.auto_advance_switch"),
          ["switch"]
        )}
        ${this._entityPicker("reverse_switch", this._t("editor.controller.reverse_switch"), [
          "switch",
        ])}
        <div class="grid-2">
          ${this._entityPicker(
            "multiplier_number",
            this._t("editor.controller.multiplier_number"),
            ["number"]
          )}
          ${this._entityPicker("repeat_number", this._t("editor.controller.repeat_number"), [
            "number",
          ])}
        </div>
        ${this._entityPicker(
          "secondary_program_automation",
          this._t("editor.controller.secondary_automation"),
          ["automation"]
        )}
        <ha-textfield
          label=${this._t("editor.controller.secondary_label")}
          placeholder=${this._t("card.master.start_calculated")}
          .value=${this._config.secondary_program_label ?? ""}
          @input=${(e: Event) =>
            this._set("secondary_program_label", (e.target as HTMLInputElement).value)}
        ></ha-textfield>
        <p class="hint">${this._t("editor.controller.secondary_hint")}</p>
      </div>

      <div class="section">
        <h3>${this._t("editor.safety.title")}</h3>
        ${this._entityPicker("lawnmower_entity", this._t("editor.safety.lawnmower"), [
          "lawn_mower",
        ])}
        <p class="hint">${this._t("editor.safety.hint")}</p>
      </div>

      <div class="section">
        <h3>${this._t("editor.zones.title")}</h3>
        ${this._config.zones.map((zone, i) => this._renderZoneEditor(zone, i))}
        <button class="btn" @click=${this._addZone}>
          <ha-icon icon="mdi:plus"></ha-icon>
          ${this._t("editor.zones.add")}
        </button>
      </div>

      <div class="section">
        <h3>${this._t("editor.diagnostics.title")}</h3>
        ${this._entityPicker("internet_switch", this._t("editor.diagnostics.internet_switch"), [
          "switch",
        ])}
        ${this._entityPicker("device_tracker", this._t("editor.diagnostics.device_tracker"), [
          "device_tracker",
        ])}
        <h3 style="margin-top:8px;">${this._t("editor.diagnostics.inputs_title")}</h3>
        ${(this._config.inputs ?? []).map((input, i) => this._renderInputEditor(input, i))}
        <button class="btn" @click=${this._addInput}>
          <ha-icon icon="mdi:plus"></ha-icon>
          ${this._t("editor.diagnostics.add_input")}
        </button>
      </div>
    `;
  }

  private _renderZoneEditor(zone: ZoneConfig, index: number): TemplateResult {
    return html`
      <div class="item-card">
        <div class="item-header">
          <b>${zone.name || this._t("common.zone_n", { n: index + 1 })}</b>
          <ha-icon-button class="remove" @click=${() => this._removeZone(index)}>
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </ha-icon-button>
        </div>
        <ha-textfield
          label=${this._t("editor.zones.name")}
          .value=${zone.name ?? ""}
          @input=${(e: Event) => this._updateZone(index, { name: (e.target as HTMLInputElement).value })}
        ></ha-textfield>
        ${this._zoneEntityPicker(index, "switch", this._t("editor.zones.switch"), ["switch"])}
        ${this._zoneEntityPicker(index, "enable_switch", this._t("editor.zones.enable_switch"), [
          "switch",
        ])}
        ${this._zoneEntityPicker(
          index,
          "duration_number",
          this._t("editor.zones.duration_number"),
          ["number"]
        )}
        ${this._zoneEntityPicker(
          index,
          "smart_irrigation_sensor",
          this._t("editor.zones.smart_irrigation_sensor"),
          ["sensor"]
        )}
      </div>
    `;
  }

  private _renderInputEditor(input: InputConfig, index: number): TemplateResult {
    return html`
      <div class="item-card">
        <div class="item-header">
          <b>${input.name || input.entity || this._t("common.input_n", { n: index + 1 })}</b>
          <ha-icon-button class="remove" @click=${() => this._removeInput(index)}>
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </ha-icon-button>
        </div>
        <ha-textfield
          label=${this._t("editor.diagnostics.input_label")}
          .value=${input.name ?? ""}
          @input=${(e: Event) => this._updateInput(index, { name: (e.target as HTMLInputElement).value })}
        ></ha-textfield>
        ${this._inputEntityPicker(index)}
      </div>
    `;
  }

  private _entityPicker(
    key: keyof IrrigationCardConfig,
    label: string,
    domains: string[]
  ): TemplateResult {
    const value = (this._config[key] as string | undefined) ?? "";
    return html`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${value}
        .label=${label}
        .includeDomains=${domains}
        allow-custom-entity
        @value-changed=${(e: EntityPickerChangeEvent) => this._set(key, e.detail.value)}
      ></ha-entity-picker>
    `;
  }

  private _zoneEntityPicker(
    index: number,
    key: keyof ZoneConfig,
    label: string,
    domains: string[]
  ): TemplateResult {
    const zone = this._config.zones[index];
    const value = (zone[key] as string | undefined) ?? "";
    return html`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${value}
        .label=${label}
        .includeDomains=${domains}
        allow-custom-entity
        @value-changed=${(e: EntityPickerChangeEvent) =>
          this._updateZone(index, { [key]: e.detail.value } as Partial<ZoneConfig>)}
      ></ha-entity-picker>
    `;
  }

  private _inputEntityPicker(index: number): TemplateResult {
    const input = (this._config.inputs ?? [])[index];
    return html`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${input.entity ?? ""}
        .label=${this._t("editor.diagnostics.input_entity")}
        .includeDomains=${["binary_sensor"]}
        allow-custom-entity
        @value-changed=${(e: EntityPickerChangeEvent) => this._updateInput(index, { entity: e.detail.value })}
      ></ha-entity-picker>
    `;
  }

  private _set(key: keyof IrrigationCardConfig, value: unknown): void {
    this._config = { ...this._config, [key]: value };
    this._emit();
  }

  private _updateZone(index: number, patch: Partial<ZoneConfig>): void {
    const zones = [...this._config.zones];
    zones[index] = { ...zones[index], ...patch };
    this._config = { ...this._config, zones };
    this._emit();
  }

  private _addZone(): void {
    const zones = [
      ...this._config.zones,
      { switch: "", name: this._t("common.zone_n", { n: this._config.zones.length + 1 }) },
    ];
    this._config = { ...this._config, zones };
    this._emit();
  }

  private _removeZone(index: number): void {
    const zones = this._config.zones.filter((_, i) => i !== index);
    this._config = { ...this._config, zones };
    this._emit();
  }

  private _updateInput(index: number, patch: Partial<InputConfig>): void {
    const inputs = [...(this._config.inputs ?? [])];
    inputs[index] = { ...inputs[index], ...patch };
    this._config = { ...this._config, inputs };
    this._emit();
  }

  private _addInput(): void {
    const inputs = [...(this._config.inputs ?? []), { entity: "" }];
    this._config = { ...this._config, inputs };
    this._emit();
  }

  private _removeInput(index: number): void {
    const inputs = (this._config.inputs ?? []).filter((_, i) => i !== index);
    this._config = { ...this._config, inputs };
    this._emit();
  }

  private _autoDetect = (): void => {
    const discovered = discoverSprinklerConfig(this.hass, this._prefixHint || undefined);
    this._config = {
      ...this._config,
      ...discovered,
      zones: discovered.zones.length > 0 ? discovered.zones : this._config.zones,
    };
    this._emit();
  };

  private _emit(): void {
    fireEvent(this, "config-changed", { config: this._config });
  }
}
