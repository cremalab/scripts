#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# MOBILE
bash "$DIR/consumers/mobile/unlink.sh"

# WEB
bash "$DIR/consumers/web/unlink.sh"

# GLOBAL
bash "$DIR/global/unlink.sh"
