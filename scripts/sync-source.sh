#!/usr/bin/env bash
# Materialise the Frappe and ERPNext source trees at the tags in pins.json.
#
# source/ is gitignored on purpose. Vendoring ~300 MB of platform source into this repo
# would bloat every clone to answer a question a 6-second shallow clone answers better.
# Everything durable is derived from it into index/ and committed there.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PINS="$ROOT/pins.json"
DEST="$ROOT/source"

# Also sync the devcontainer-pinned trees (source/.devcontainer/*) when called with
# --with-devcontainer. Those are what local dev runs; build-drift.mjs diffs them against
# production to show what "works on my machine" can hide.
WITH_DEVCONTAINER=0
[[ "${1:-}" == "--with-devcontainer" ]] && WITH_DEVCONTAINER=1

read_pin() { node -p "JSON.parse(require('fs').readFileSync('$PINS','utf8'))$1"; }

clone_at() {
  local repo="$1" tag="$2" dir="$3"
  if [[ -d "$dir/.git" ]] && [[ "$(git -C "$dir" describe --tags --exact-match 2>/dev/null || true)" == "$tag" ]]; then
    echo "  ✓ $(basename "$dir") already at $tag"
    return
  fi
  rm -rf "$dir"
  mkdir -p "$(dirname "$dir")"
  echo "  ↓ $(basename "$dir") @ $tag"
  git clone --quiet --depth 1 --branch "$tag" "$repo" "$dir"
}

mkdir -p "$DEST"
echo "syncing production-pinned source into source/"
for app in frappe erpnext; do
  clone_at "$(read_pin ".source.$app.repo")" "$(read_pin ".source.$app.tag")" "$DEST/$app"
done

if [[ $WITH_DEVCONTAINER == 1 ]]; then
  echo "syncing devcontainer-pinned source into source/.devcontainer/"
  for app in frappe erpnext; do
    clone_at "$(read_pin ".source.$app.repo")" "$(read_pin ".devcontainer.$app.tag")" "$DEST/.devcontainer/$app"
  done
fi

echo
for app in frappe erpnext; do
  printf '  %-8s %s\n' "$app" "$(git -C "$DEST/$app" describe --tags 2>/dev/null || echo '?')"
done
echo "done."
