#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT"
rm -rf dist && mkdir -p dist
cp index.html styles.css app.js dist/
db="${1:-_database}"
latest="$(find "$db/data/devops" -type f -name '*.json' | sort | tail -1 || true)"
if [[ -n "$latest" ]]; then cp "$latest" dist/data.json; else echo '{"updated_at":"none","metrics":[],"repositories":[]}' > dist/data.json; fi
