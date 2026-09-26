#!/usr/bin/env bash
set -euo pipefail
uv run sphinx-build -W --keep-going -b html ./srcs ./docs
touch ./docs/.nojekyll

