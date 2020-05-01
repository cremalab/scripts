#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/utils.sh"

print "Building library..."

npm run build

print "Running in CI: $CI"

case $CI in
 true) bash "$DIR/ci.remote.sh" ;;
 *) bash "$DIR/ci.local.sh" ;;
esac