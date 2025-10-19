#!/usr/bin/env bash
set -e


# Find all subdirectories in cookiecutter/ except 'templates'
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
COOKIECUTTER_ROOT="$ROOT/cookiecutter"

failures=()

for template_dir in "$COOKIECUTTER_ROOT"/*; do
  name="$(basename "$template_dir")"
  if [ "$name" = "templates" ]; then
    continue
  fi
  if [ ! -d "$template_dir" ]; then
    continue
  fi
  echo "Testing $name template..."
  # Find the main cookiecutter.json for this template
  CONFIG_FILE=$(find "$template_dir" -name cookiecutter.json | head -n 1)
  if [ -z "$CONFIG_FILE" ]; then
    echo "[FAIL] $name: cookiecutter.json not found"
    failures+=("$name")
    continue
  fi
  # Use a temp dir for output
  TMPDIR=$(mktemp -d)
  # Try to build with default context (no-input)
  if ! cookiecutter --no-input --config-file "$CONFIG_FILE" --output-dir "$TMPDIR" "$template_dir"; then
    echo "[FAIL] $name: build failed"
    failures+=("$name")
  else
    echo "[PASS] $name: build succeeded"
  fi
  rm -rf "$TMPDIR"
  echo
done

if [ ${#failures[@]} -gt 0 ]; then
  echo "Some templates failed to build: ${failures[*]}"
  exit 1
else
  echo "All templates built successfully."
fi
