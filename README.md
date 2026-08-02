# hassio-irrigation-card

[![CI](../../actions/workflows/ci.yml/badge.svg)](../../actions?workflow=ci.yml)
![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)

Repository: **https://git.kjan.de/jank/hassio-irrigation-card** (self-hosted
[Gitea](https://about.gitea.com/), Actions-enabled - this is where CI runs
and where the code actually lives). Mirrored to
**https://github.com/Milkman337/hassio-irrigation-card** so it's
HACS-installable (see [Installation](#installation)) - open issues/PRs
against whichever remote you prefer.

```sh
git clone https://git.kjan.de/jank/hassio-irrigation-card.git
# or, from the GitHub mirror:
git clone https://github.com/Milkman337/hassio-irrigation-card.git
```

A polished [Home Assistant](https://www.home-assistant.io/) Lovelace card and
a matching advanced automation blueprint for multi-zone
[ESPHome `sprinkler:`](https://esphome.io/components/sprinkler.html)-based
irrigation controllers - the ESP32 boards that expose a main run switch,
auto-advance/reverse switches, a duration multiplier + repeat count, and one
switch/enable-switch/run-duration trio per zone.

The card is theme-native (uses your Home Assistant theme's colors, light or
dark) and responsive on both desktop and mobile. The blueprint adds
scheduling, weather/freeze/soil-moisture skip logic, notifications and a
run-time safety ceiling on top of whatever's already on the device.

## Contents

- [`src/`](src) - TypeScript/Lit source for the Lovelace card
- [`blueprints/automation/advanced_irrigation_scheduler.yaml`](blueprints/automation/advanced_irrigation_scheduler.yaml) - the scheduler
- [`blueprints/automation/irrigation_watchdog.yaml`](blueprints/automation/irrigation_watchdog.yaml) - independent stuck-valve failsafe
- [`blueprints/automation/smart_irrigation_runner.yaml`](blueprints/automation/smart_irrigation_runner.yaml) - runs zones from Smart Irrigation's calculated durations
- [`examples/lovelace-example.yaml`](examples/lovelace-example.yaml) - a full example card config

## Card features

- Header with program status ("Idle" / "Running: Zone X") and an optional
  online/offline pill sourced from a `device_tracker` entity.
- Big Start/Stop button for the main controller switch, plus a dedicated
  emergency **stop-all** button that force-closes the controller and every
  zone switch in one tap.
- One tile per zone: tap to run/stop that zone manually, live countdown +
  progress bar while running, an inline enable/disable toggle, and +/-30s
  duration steppers.
- Collapsible **Program Settings** panel: auto-advance, reverse-order,
  duration multiplier slider, repeat-cycle stepper, and a live "estimated
  total runtime" readout.
- Collapsible **Diagnostics** panel: arbitrary binary-sensor input chips
  (rain sensor, flow alarm, etc.), an internet-access switch, and
  controller connectivity/IP.
- Full visual (no-YAML) editor, including an "auto-detect" button that scans
  your entities by a common ID prefix and fills in the whole card for you.
- Tapping any entity name/chip opens Home Assistant's native "more info"
  dialog for that entity.
- Optional lock-out while a robot lawnmower isn't docked, and optional
  [Smart Irrigation](https://altmenorg.github.io/HAsmartirrigation/)
  integration (per-zone suggested durations with one-tap apply, plus a
  recalculate button) - see below for both.

## Required Home Assistant entities ("buttons")

None of these are bundled with the card - they come from your ESPHome
device (or whatever integration exposes equivalent entities). Everything is
optional in the card config _except_ the zone switches; leaving the rest
unset just hides that part of the UI.

| Card config key                   | Entity domain    | What it is                                                                                  | ESPHome `sprinkler:` source                                   |
| --------------------------------- | ---------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `controller_switch`               | `switch`         | Starts/stops the whole multi-zone program                                                   | the `sprinkler:` component's main switch                      |
| `auto_advance_switch`             | `switch`         | Auto-advance to the next zone                                                               | `sprinkler:` `auto_advance_switch`                            |
| `reverse_switch`                  | `switch`         | Run the zone sequence back to front                                                         | `sprinkler:` `reverse_switch`                                 |
| `multiplier_number`               | `number`         | Scales every zone's run time (e.g. `x1.0`)                                                  | `sprinkler:` `multiplier_number`                              |
| `repeat_number`                   | `number`         | How many extra times to repeat the program                                                  | `sprinkler:` `repeat_number`                                  |
| `internet_switch`                 | `switch`         | Device-level network/API access toggle (if your board exposes one)                          | board-specific                                                |
| `device_tracker`                  | `device_tracker` | Online/offline + IP for the controller                                                      | automatic if the device uses the `wifi:`/`api:` components    |
| `lawnmower_entity`                | `lawn_mower`     | Locks the whole card unless this entity is `docked` - see [below](#robot-lawnmower-lockout) | not part of the controller - your mower integration           |
| `secondary_program_automation`    | `automation`     | Adds a second button that triggers it on demand - see [below](#secondary-program-button)    | not part of the controller - any automation you choose        |
| `zones[].switch`                  | `switch`         | Opens/closes that zone's valve                                                              | per-valve switch                                              |
| `zones[].enable_switch`           | `switch`         | Include/exclude the zone from the auto sequence                                             | per-valve `enable_switch`                                     |
| `zones[].duration_number`         | `number`         | That zone's run duration, in seconds                                                        | per-valve `run_duration_number`                               |
| `zones[].smart_irrigation_sensor` | `sensor`         | Suggested duration from Smart Irrigation - see [below](#smart-irrigation-integration)       | not part of the controller - the Smart Irrigation integration |
| `inputs[].entity`                 | `binary_sensor`  | Any extra digital input you want surfaced (rain sensor, flow alarm, manual button, ...)     | board-specific GPIO binary sensors                            |

If your entity IDs all share a common prefix (which is the ESPHome default,
e.g. `switch.<device>_zone_1`, `number.<device>_zone_1_run_duration`, ...),
open the card's visual editor, type that prefix into **Auto-detect from
entity prefix**, and click **Detect** - it fills in the controller entities
and every zone it can find.

## Installation

### HACS (via the GitHub mirror)

> HACS's "custom repositories" feature only understands **GitHub** repos -
> it pulls metadata/releases straight from GitHub's API, so it can't add a
> repo directly from a self-hosted Gitea/Forgejo/GitLab instance. That's
> what the mirror at
> [github.com/Milkman337/hassio-irrigation-card](https://github.com/Milkman337/hassio-irrigation-card)
> is for.

1. HACS -> the 3-dot menu (top right) -> **Custom repositories**.
2. Repository: `https://github.com/Milkman337/hassio-irrigation-card`,
   type **Dashboard**.
3. Find **Sprinkler Irrigation Card** in HACS and install it (no tagged
   release exists yet, so HACS will offer the `main` branch - that's
   expected). Add the Lovelace resource if HACS didn't do it automatically.

### Manual (no HACS, works from either remote)

1. Get `hassio-irrigation-card.js`, either:
   - build it yourself: `npm install && npm run build` (or via the Nix dev
     shell - see [Development](#development)) produces
     `dist/hassio-irrigation-card.js`; or
   - grab the artifact from the latest green
     [CI run](https://git.kjan.de/jank/hassio-irrigation-card/actions)
     (**Artifacts** on the run summary page); or
   - download the pre-built bundle straight onto your HA host - the repo
     tracks `dist/hassio-irrigation-card.js` for exactly this (see
     [Development](#development) for how it's kept in sync):
     ```sh
     wget -O /config/www/hassio-irrigation-card.js \
       https://git.kjan.de/jank/hassio-irrigation-card/raw/branch/main/dist/hassio-irrigation-card.js
     # or, from the GitHub mirror:
     wget -O /config/www/hassio-irrigation-card.js \
       https://raw.githubusercontent.com/Milkman337/hassio-irrigation-card/main/dist/hassio-irrigation-card.js
     ```
2. Copy it to `<config>/www/hassio-irrigation-card.js`.
3. Settings -> Dashboards -> Resources -> **Add resource**:
   URL `/local/hassio-irrigation-card.js`, type _JavaScript Module_.
4. Add a card with type `custom:hassio-irrigation-card` (use the visual
   editor, or see [`examples/lovelace-example.yaml`](examples/lovelace-example.yaml)).

## Card configuration reference

```yaml
type: custom:hassio-irrigation-card
title: Garden Irrigation # optional, default "Irrigation"
compact: false # optional, hides the per-zone duration +/- steppers
start_collapsed: false # optional, Program Settings & Diagnostics start collapsed
show_diagnostics: true # optional, shows/hides the Diagnostics panel entirely
show_multiplier_preview: true # optional, shows/hides the "estimated total runtime" line

controller_switch: switch...
auto_advance_switch: switch...
reverse_switch: switch...
multiplier_number: number...
repeat_number: number...
internet_switch: switch...
device_tracker: device_tracker...
lawnmower_entity: lawn_mower... # optional, see "Robot lawnmower lockout" below
secondary_program_automation: automation... # optional, see "Secondary program button" below
secondary_program_label: Start Calculated Program # optional, that button's label

zones: # required, at least one zone
  - name: Front Lawn # optional, falls back to friendly_name / "Zone N"
    icon: mdi:grass # optional
    switch: switch... # required
    enable_switch: switch... # optional
    duration_number: number... # optional
    smart_irrigation_sensor: sensor... # optional, see "Smart Irrigation integration" below

inputs: # optional
  - entity: binary_sensor...
    name: Rain Sensor # optional
    icon: mdi:weather-rainy # optional
```

### Robot lawnmower lockout

Set `lawnmower_entity` to a `lawn_mower.*` entity (Husqvarna Automower,
Worx Landroid, etc.) and the card locks itself - master switch, every zone
tile (tap-to-toggle, enable switch, duration steppers), and Program
Settings - whenever that entity's state isn't `docked`. A banner explains
why. The emergency **stop-all** button is deliberately exempt so it's
never itself lockable, and the Diagnostics panel is unaffected since
nothing in it turns water on. Anything other than exactly `docked`
(including `unavailable`/`unknown`) locks the card - fails safe if the
mower's state can't be confirmed.

### Smart Irrigation integration

Set `zones[].smart_irrigation_sensor` to a zone's
`sensor.smart_irrigation_<zone>` entity from the
[Smart Irrigation](https://altmenorg.github.io/HAsmartirrigation/)
integration (calculates run durations from weather/evapotranspiration
data) alongside that zone's `duration_number`, and:

- the zone tile shows a **Suggested \<time\>** row with a one-tap check
  button that copies the calculated duration into `duration_number` - it
  only appears when the two differ by 5+ seconds, so it won't nag you when
  they already match;
- a small recalculate button (weather icon) appears in the card header,
  calling `smart_irrigation.calculate_all_zones` - shown automatically
  once at least one zone has `smart_irrigation_sensor` set and the
  integration's services are available, no extra config needed.

Both respect the lawnmower lockout above. For actually _running_ zones
from Smart Irrigation's calculations on a schedule (rather than manually
applying suggestions from the card), see the **Smart Irrigation Runner**
blueprint below.

### Secondary program button

Set `secondary_program_automation` to any `automation.*` entity and a
second button appears next to Start/Stop Program, labeled
`secondary_program_label` (default "Start Calculated Program"). Tapping
it calls `automation.trigger` on that entity - it runs right now instead
of waiting for its normal trigger, while any conditions/skip logic inside
the automation's own actions (rain delay, vacation mode, lawnmower, ...)
still apply exactly as if it had triggered normally. Respects this card's
own lawnmower lockout too, and is disabled while the target automation
itself is off.

The obvious pairing: create an automation from the **Smart Irrigation
Runner** blueprint below, then point this at its entity_id (Settings ->
Automations & Scenes -> find it -> copy the entity ID) so you can run a
weather-calculated cycle on demand instead of only at its scheduled event.
Nothing about this button is Smart-Irrigation-specific though - point it
at any automation you want a manual trigger for.

## Automation blueprints

Import via Settings -> Automations & Scenes -> Blueprints -> **Import
Blueprint**, and paste one of the raw file URLs below, or copy the YAML
file into `<config>/blueprints/automation/hassio-irrigation-card/` and
reload automations.

### Advanced Irrigation Scheduler

`blueprints/automation/advanced_irrigation_scheduler.yaml`
([Gitea raw](https://git.kjan.de/jank/hassio-irrigation-card/raw/branch/main/blueprints/automation/advanced_irrigation_scheduler.yaml) /
[GitHub raw](https://raw.githubusercontent.com/Milkman337/hassio-irrigation-card/main/blueprints/automation/advanced_irrigation_scheduler.yaml))

- **Schedule**: a fixed daily start time, or sunrise/sunset with an offset.
  Want more than one start time per day? Create a second automation from
  this blueprint with a different time - the `time` selector doesn't
  support multiple values, and one automation per time is simpler anyway.
- **Sequencing mode**: `Native` lets the controller run its own
  auto-advance program (uses whatever multiplier/repeat/enable state is
  already on the device); `Orchestrated` has Home Assistant turn each zone
  on/off itself, which is what enables per-zone soil-moisture skipping.
- **Zones**: ordered lists of zone switches, optional per-zone enable
  switches and duration entities (same order/index), a default duration
  for zones without one, an optional seasonal/global multiplier entity, a
  repeat-cycle count, and a gap between zones.
- **Per-zone soil moisture skip** _(orchestrated mode)_: give it an ordered
  list of moisture sensors and a threshold; any zone whose sensor is
  already at/above that threshold gets skipped, individually.
- **Whole-run skip conditions**: rain sensor, weather entity (skips on
  rainy/snowy/stormy conditions), freeze-protection temperature sensor +
  threshold, a manual rain-delay `input_boolean`, and a vacation/pause
  `input_boolean`.
- **Controller-offline check**: skip and notify instead of silently doing
  nothing if the controller's `device_tracker` isn't `home`.
- **Notifications**: start/skip/finish messages to any `notify.*` entity
  target.
- **Safety**: a percentage safety margin added on top of the calculated
  program length before Home Assistant force-closes every valve, in case
  something doesn't report back as expected. This runs _unconditionally_
  as the last step of every invocation, native or orchestrated.

### Irrigation Watchdog / Max Runtime Failsafe

`blueprints/automation/irrigation_watchdog.yaml`
([Gitea raw](https://git.kjan.de/jank/hassio-irrigation-card/raw/branch/main/blueprints/automation/irrigation_watchdog.yaml) /
[GitHub raw](https://raw.githubusercontent.com/Milkman337/hassio-irrigation-card/main/blueprints/automation/irrigation_watchdog.yaml))

A second, independent automation: if any watched switch stays `on` longer
than a configured maximum runtime - for _any_ reason, including the
scheduler automation being disabled, a stuck relay, someone forgetting to
close a valve manually, or Home Assistant restarting mid-cycle - it force-
closes every watched switch and sends a critical notification. Point it at
every zone switch (and the main controller switch); it's independent of the
scheduler blueprint on purpose, so create it as a _separate_ automation.

### Smart Irrigation Runner

`blueprints/automation/smart_irrigation_runner.yaml`
([Gitea raw](https://git.kjan.de/jank/hassio-irrigation-card/raw/branch/main/blueprints/automation/smart_irrigation_runner.yaml) /
[GitHub raw](https://raw.githubusercontent.com/Milkman337/hassio-irrigation-card/main/blueprints/automation/smart_irrigation_runner.yaml))

An alternative to the Advanced Irrigation Scheduler for zones whose timing
you want driven by the
[Smart Irrigation](https://altmenorg.github.io/HAsmartirrigation/)
integration instead of a fixed schedule. **Don't run both blueprints
against the same zones** - they'd each try to water them independently.

- **Trigger**: Smart Irrigation's own `smart_irrigation_start_irrigation_all_zones`
  event (its documented mechanism for "finish before sunrise" scheduling,
  skip-day aware on Smart Irrigation's side already).
- **Zones**: ordered `zone_switches` paired by index with `duration_sensors`
  (each zone's `sensor.smart_irrigation_<zone>` entity) - runs each zone for
  exactly that many seconds, skipping zones Smart Irrigation calculated as
  needing 0s, then calls `smart_irrigation.reset_bucket` on that zone's
  sensor afterward so it doesn't think the deficit is still outstanding.
- **No rain/freeze skip conditions** - that's the entire point of Smart
  Irrigation's evapotranspiration calculation; duplicating it here would
  just fight it.
- **Safety**: an optional `lawnmower_entity` and `vacation_mode_boolean`
  can still skip the whole run (added proactively, same rationale as the
  card's [lawnmower lockout](#robot-lawnmower-lockout) - a scheduled
  automation runs whether or not the card is even open). Pair with the
  **Irrigation Watchdog** blueprint above the same way as the other
  scheduler, rather than reimplementing a timeout here.
- **Notifications**: same start/skip/finish pattern as the other scheduler.

### Suggested helpers

Create these `input_boolean` helpers (Settings -> Devices & Services ->
Helpers) if you want the corresponding skip conditions in the scheduler
blueprint:

- `input_boolean.irrigation_rain_delay` - flip on from a dashboard to skip
  the next scheduled run(s).
- `input_boolean.irrigation_vacation_mode` - flip on to pause the scheduler
  entirely.

## Development

This repo ships two independent, reproducible ways to get the toolchain
(Node.js, TypeScript, esbuild, eslint, prettier, yamllint, gitleaks) - pick
whichever fits your workflow, both install the same tool versions:

```sh
# Option A: direnv (recommended) - picks up .envrc automatically,
# which loads the devenv.nix shell.
direnv allow

# Option B: plain Nix, no devenv/direnv required.
nix develop
```

Either way, once you're in the shell:

```sh
npm install            # first time only
build                  # bundle the card to dist/hassio-irrigation-card.js
watch                  # rebuild on file changes
lint                   # eslint + yamllint (incl. the blueprints)
format                 # prettier
scan                   # gitleaks over the working tree + git history
```

(Outside the devenv shell - e.g. under plain `nix develop` - use the
equivalent `npm run build`/`npm run watch`/`npm run lint`/`npm run format`
and `gitleaks detect --source . -v --redact` directly; `devenv.nix`'s
scripts are just short aliases for these.)

`devenv.nix` defines the devenv/direnv shell (Node 22, TypeScript, npm,
gitleaks). `flake.nix` provides a second, self-contained shell via
`nix develop` with the same tools, for anyone who wants pure Nix without
installing devenv globally. `.envrc` also loads a local `.env` (via
`dotenv_if_exists`) if you create one from [`.env.example`](.env.example) -
useful for pointing ad-hoc test scripts at a real Home Assistant instance
during development.

CI (`.github/workflows/ci.yml`, runs on this repo's [Gitea
Actions](https://git.kjan.de/jank/hassio-irrigation-card/actions)) installs
devenv via Nix and runs `typecheck`, `build`, `lint`, and the `gitleaks`
scan on every push/PR, then uploads the built card as a job artifact. Note
it pins `actions/upload-artifact` to `v3`: Gitea/Forgejo Actions runners
don't yet support the newer artifact API that `v4`+ requires.

**`dist/hassio-irrigation-card.js` is committed** (unlike most Node
projects) so there's a stable raw-file URL for the no-build manual install
above - HACS isn't an option here (see [Installation](#installation)), so
that's the easiest path for anyone who just wants the card without setting
up Node/Nix. CI builds and checks it matches `src/` but does **not** commit
it back, so if you change anything under `src/`, run `build` and commit the
updated `dist/hassio-irrigation-card.js` yourself in the same change.

**This repository is public - never commit real credentials.** `.env` and
`.env.*` (besides `.env.example`) are gitignored, and both CI and the
local `scan` script run gitleaks against the working tree and full git
history. If you ever paste a Home Assistant long-lived access token
somewhere it could leak (chat, a public gist, a commit), rotate it
immediately from your profile's Security tab.

## License

MIT, see [LICENSE](LICENSE).
