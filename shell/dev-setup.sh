#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

bash "$DIR/global/setup-submodules.sh"
bash "$DIR/global/setup-build.sh"
bash "$DIR/consumers/mobile/setup-install.sh"
bash "$DIR/consumers/web/setup-install.sh"

# GLOBAL
bash "$DIR/global/setup-link.sh"

# MOBILE
bash "$DIR/consumers/mobile/setup-link.sh"

# WEB
bash "$DIR/consumers/web/setup-link.sh"
