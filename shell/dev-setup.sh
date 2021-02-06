#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

bash "$DIR/global/setup-bootstrap.sh"
bash "$DIR/global/setup-build.sh"
bash "$DIR/global/setup-link.sh"
bash "$DIR/global/setup-submodules.sh"

# MOBILE
bash "$DIR/consumers/mobile/setup-install.sh"
bash "$DIR/consumers/mobile/setup-link.sh"

# WEB
bash "$DIR/consumers/web/setup-install.sh"
bash "$DIR/consumers/web/setup-link.sh"
