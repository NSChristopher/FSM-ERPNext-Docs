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

# Apps we do not install, cloned so the index can answer "not on your bench, but app X ships
# it". Only hrms tags version-N releases; the rest track a branch, so clone_at's tag check
# does not apply and they are re-cloned each sync.
echo "syncing available-but-not-installed apps into source/available/"
AVAILABLE=$(node -p "Object.keys(JSON.parse(require('fs').readFileSync('$PINS','utf8')).available).filter(k=>!k.startsWith('_')).join(' ')")
for app in $AVAILABLE; do
  ref="$(read_pin ".available['$app'].ref")"
  dir="$DEST/available/$app"
  if [[ -d "$dir/.git" ]] && [[ "$(git -C "$dir" rev-parse --abbrev-ref HEAD 2>/dev/null || true)" == "$ref" ]]; then
    echo "  ✓ $app already on $ref"
    continue
  fi
  rm -rf "$dir"
  mkdir -p "$(dirname "$dir")"
  echo "  ↓ $app @ $ref"
  git clone --quiet --depth 1 --branch "$ref" "$(read_pin ".available['$app'].repo")" "$dir"
done

if [[ $WITH_DEVCONTAINER == 1 ]]; then
  echo "syncing devcontainer-pinned source into source/.devcontainer/"
  for app in frappe erpnext; do
    clone_at "$(read_pin ".source.$app.repo")" "$(read_pin ".devcontainer.$app.tag")" "$DEST/.devcontainer/$app"
  done
fi

echo
for app in frappe erpnext; do
  printf '  %-10s %s  (installed)\n' "$app" "$(git -C "$DEST/$app" describe --tags 2>/dev/null || echo '?')"
done
for app in $AVAILABLE; do
  printf '  %-10s %s  (available, not installed)\n' "$app" "$(git -C "$DEST/available/$app" rev-parse --short HEAD 2>/dev/null || echo '?')"
done
echo "done."
