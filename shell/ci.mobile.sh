#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/utils.sh"

# GLOBAL - SETUP
bash "$DIR/global/setup-build.sh"

# MOBILE
bash "$DIR/consumers/mobile/setup-install.sh"
bash "$DIR/consumers/mobile/setup-link.sh"
bash "$DIR/package-links-create.sh"
bash "$DIR/consumers/mobile/test.sh"