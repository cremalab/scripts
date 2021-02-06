#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# GLOBAL - SETUP
bash "$DIR/global/setup-bootstrap.sh"
bash "$DIR/global/setup-build.sh"
bash "$DIR/global/setup-link.sh"
bash "$DIR/global/setup-submodules.sh"

# MOBILE
bash "$DIR/consumers/mobile/setup-install.sh"
bash "$DIR/consumers/mobile/setup-link.sh"
bash "$DIR/consumers/mobile/test.sh"

# WEB
bash "$DIR/consumers/web/setup-install.sh"
bash "$DIR/consumers/web/setup-link.sh"
bash "$DIR/consumers/web/test.sh"