#!/usr/bin/env bash
# Pull the upstream doc sets that genuinely do live in git into vendor/, verbatim.
#
# Only two qualify. frappe_docker is the base our production image is built FROM, and bench
# is the CLI we run every day - both keep real markdown in-repo. The framework and ERPNext
# manuals do not: they are wiki content, handled by crawl-docs.mjs instead.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PINS="$ROOT/pins.json"
DEST="$ROOT/vendor"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

read_pin() { node -p "JSON.parse(require('fs').readFileSync('$PINS','utf8'))$1"; }

names=$(node -p "Object.keys(JSON.parse(require('fs').readFileSync('$PINS','utf8')).vendor).filter(k=>!k.startsWith('_')).join(' ')")

entries=""
for name in $names; do
  repo="$(read_pin ".vendor['$name'].repo")"
  ref="$(read_pin ".vendor['$name'].ref")"
  includes="$(node -p "JSON.parse(require('fs').readFileSync('$PINS','utf8')).vendor['$name'].include.join(' ')")"

  echo "  ↓ $name @ $ref"
  git clone --quiet --depth 1 --branch "$ref" "$repo" "$TMP/$name"
  sha="$(git -C "$TMP/$name" rev-parse HEAD)"

  rm -rf "${DEST:?}/$name"
  mkdir -p "$DEST/$name"
  for inc in $includes; do
    if [[ -e "$TMP/$name/$inc" ]]; then
      cp -R "$TMP/$name/$inc" "$DEST/$name/"
    else
      echo "    ! $name: '$inc' not present at $ref" >&2
    fi
  done

  count=$(find "$DEST/$name" -name '*.md' | wc -l | tr -d ' ')
  echo "    $count markdown files"
  entries="${entries}{\"name\":\"$name\",\"repo\":\"$repo\",\"ref\":\"$ref\",\"sha\":\"$sha\",\"markdown_files\":$count},"
done

node -e "
const fs=require('fs');
fs.writeFileSync('$DEST/_manifest.json', JSON.stringify({
  note: 'Synced verbatim from upstream git. Do not edit by hand - sync-vendor.sh overwrites.',
  synced_at: new Date().toISOString().slice(0,10),
  sources: JSON.parse('[' + '$entries'.replace(/,\$/,'') + ']'),
}, null, 2) + '\n');
"
echo "done."
