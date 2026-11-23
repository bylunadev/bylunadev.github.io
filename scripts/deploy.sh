#!/usr/bin/env bash
# Publica o site no GitHub Pages: gera a versão estática e envia para a branch gh-pages.
set -euo pipefail
cd "$(dirname "$0")/.."

REMOTE="$(git remote get-url origin)"
NAME="$(git config user.name)"
EMAIL="$(git config user.email)"

npm test
rm -rf out
SITE_URL="https://bylunadev.github.io" npm run build
touch out/.nojekyll   # deixa o GitHub servir a pasta _next/

cd out
git init -q -b gh-pages
git add -A
git -c user.name="$NAME" -c user.email="$EMAIL" commit -q -m "Publicar site ($(git -C .. rev-parse --short HEAD))"
git push -q -f "$REMOTE" gh-pages
echo "Publicado: https://bylunadev.github.io"
