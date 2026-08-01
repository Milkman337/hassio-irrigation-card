{
  pkgs,
  lib,
  ...
}: {
  # https://devenv.sh/basics/
  env.PROJECT_NAME = "hassio-irrigation-card";

  # https://devenv.sh/languages/
  languages.javascript = {
    enable = true;
    npm.enable = true;
  };
  languages.typescript.enable = true;

  packages = with pkgs; [
    jq
    yamllint
    gitleaks
  ];

  # https://devenv.sh/scripts/
  scripts.build.exec = ''
    npm run build
  '';
  scripts.watch.exec = ''
    npm run watch
  '';
  scripts.lint.exec = ''
    npm run lint && yamllint blueprints
  '';
  scripts.format.exec = ''
    npm run format
  '';
  scripts.scan.exec = ''
    gitleaks detect --source . -v --redact
  '';

  enterShell = ''
    echo ""
    echo "hassio-irrigation-card dev shell"
    echo "  build   - bundle the Lovelace card to dist/"
    echo "  watch   - rebuild on file changes"
    echo "  lint    - run eslint + yamllint"
    echo "  format  - run prettier"
    echo "  scan    - run gitleaks over the repo + git history"
    echo ""
    echo "Copy .env.example to .env with your own HA_URL / HA_TOKEN for local testing."
    echo "Never commit .env - this repo is public."
    echo ""
  '';

  # Keep the dev shell CI-friendly / non-interactive by default.
  devcontainer.enable = false;
}
