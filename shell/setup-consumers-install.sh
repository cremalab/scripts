#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# GET SUBMODULES
bash "$DIR/global/setup-submodules.sh"

# MOBILE
bash "$DIR/consumers/mobile/setup-install.sh"

# WEB
bash "$DIR/consumers/web/setup-install.sh"