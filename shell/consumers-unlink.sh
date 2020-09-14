#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/utils.sh"

# MOBILE
bash "$DIR/consumers/mobile/unlink.sh"

# WEB
bash "$DIR/consumers/web/unlink.sh"

print "SHOW LINKS"

npm ls -g --depth=0 --link=true