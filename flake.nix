{
  description = "Dev environment for hassio-irrigation-card (Home Assistant Lovelace card + blueprint)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        # `nix develop` gives the same Node/TS toolchain as `devenv shell` /
        # direnv (see devenv.nix), without depending on devenv's flake
        # integration (which needs a git-tracked project root to resolve
        # its working directory - not guaranteed on a fresh checkout).
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22
            jq
            yamllint
            gitleaks
          ];

          shellHook = ''
            echo ""
            echo "hassio-irrigation-card dev shell (nix develop)"
            echo "  npm install && npm run build   - bundle the Lovelace card to dist/"
            echo "  npm run watch                  - rebuild on file changes"
            echo "  npm run lint && yamllint blueprints"
            echo "  npm run format"
            echo "  gitleaks detect --source . -v --redact"
            echo ""
            echo "Tip: 'direnv allow' uses devenv.nix instead and adds the 'build'/'watch'/'lint'/'format' scripts."
            echo ""
          '';
        };

        formatter = pkgs.nixpkgs-fmt;
      });
}
