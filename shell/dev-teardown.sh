#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# WEB
bash "$DIR/consumers/web/unlink.sh"

# MOBILE
bash "$DIR/consumers/mobile/unlink.sh"

# GLOBAL - Remove package links
bash "$DIR/package-links-remove.sh"
