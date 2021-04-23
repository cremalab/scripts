#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# GLOBAL - SETUP
bash "$DIR/global/setup-submodules.sh"
bash "$DIR/global/setup-build.sh"

# MOBILE
bash "$DIR/consumers/mobile/setup-install.sh"
bash "$DIR/consumers/mobile/setup-link.sh"

# GLOBAL - Bootstrap
bash "$DIR/package-links-create.sh"

# MOBILE
bash "$DIR/consumers/mobile/test.sh"