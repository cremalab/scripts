#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# GLOBAL - SETUP
npm run bootstrap
bash "$DIR/package-links-remove.sh"
bash "$DIR/global/setup-submodules.sh"
bash "$DIR/global/setup-build.sh"
bash "$DIR/package-links-create.sh"

# MOBILE
bash "$DIR/consumers/mobile/setup-install.sh"
bash "$DIR/consumers/mobile/setup-link.sh"

# WEB
bash "$DIR/consumers/web/setup-install.sh"
bash "$DIR/consumers/web/setup-link.sh"

# !!!BOOTSTRAP - MUST BE DONE AFTER ANY LINKING
npm run bootstrap

# TEST - MOBILE & WEb
bash "$DIR/consumers/test.sh"