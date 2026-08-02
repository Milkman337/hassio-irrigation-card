import type { HomeAssistant } from "custom-card-helpers";

import en from "./languages/en.json";
import de from "./languages/de.json";

type Translations = typeof en;

const LANGUAGES: Record<string, Translations> = { en, de };

function resolve(dict: unknown, key: string): unknown {
  return key
    .split(".")
    .reduce<unknown>(
      (node, part) =>
        node && typeof node === "object" ? (node as Record<string, unknown>)[part] : undefined,
      dict
    );
}

/**
 * Looks up `key` (dot-separated, e.g. "card.master.start") in the
 * language matching hass.locale.language/hass.language, falling back to
 * English for missing translations or unsupported languages. `vars`
 * values are substituted for `{name}` placeholders in the string.
 */
export function localize(
  hass: HomeAssistant | undefined,
  key: string,
  vars?: Record<string, string | number>
): string {
  const lang = (hass?.locale?.language ?? hass?.language ?? "en").toLowerCase().split("-")[0];
  const dict = LANGUAGES[lang] ?? LANGUAGES.en;

  let value = resolve(dict, key);
  if (typeof value !== "string") value = resolve(LANGUAGES.en, key);
  let result = typeof value === "string" ? value : key;

  if (vars) {
    for (const [name, replacement] of Object.entries(vars)) {
      result = result.replace(`{${name}}`, String(replacement));
    }
  }
  return result;
}
