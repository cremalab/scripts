#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# GLOBAL - SETUP
bash "$DIR/global/setup-link.sh"

# MOBILE
bash "$DIR/mobile/setup-link.sh"

# WEB
bash "$DIR/web/setup-link.sh"

# GLOBAL - BOOTSTRAP
bash "$DIR/global/setup-bootstrap.sh"