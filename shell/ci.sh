#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# GLOBAL - SETUP
bash "$DIR/global/setup-submodules.sh"
bash "$DIR/global/setup-build.sh"
bash "$DIR/global/setup-link.sh"

# MOBILE
bash "$DIR/consumers/mobile/setup-clone.sh"
bash "$DIR/consumers/mobile/setup-install.sh"
bash "$DIR/consumers/mobile/test.sh"
bash "$DIR/consumers/mobile/unlink.sh"

# WEB
bash "$DIR/consumers/web/setup-clone.sh"
bash "$DIR/consumers/web/setup-install.sh"
bash "$DIR/consumers/web/test.sh"
bash "$DIR/consumers/web/unlink.sh"