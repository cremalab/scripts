#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# PRE-CLEAN
bash "$DIR/package-links-remove.sh"

# GLOBAL - SETUP
bash "$DIR/global/setup-submodules.sh"
bash "$DIR/global/setup-build.sh"
bash "$DIR/package-links-create.sh"

# WEB
bash "$DIR/consumers/web/setup-install.sh"
bash "$DIR/consumers/web/setup-link.sh"

# !!!BOOTSTRAP - MUST BE DONE AFTER ANY LINKING
npm run bootstrap

# WEB
bash "$DIR/consumers/web/test.sh"