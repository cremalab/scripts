#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# WEB
bash "$DIR/consumers/web/unlink.sh"

# MOBILE
bash "$DIR/consumers/mobile/unlink.sh"

# Global
bash "$DIR/global/unlink.sh"

