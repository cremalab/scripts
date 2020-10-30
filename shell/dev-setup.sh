#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# GLOBAL
bash "$DIR/global/setup-link.sh"

# MOBILE
bash "$DIR/consumers/mobile/setup-link.sh"

# WEB
bash "$DIR/consumers/web/setup-link.sh"
