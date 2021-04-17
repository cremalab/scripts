#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "TESTING: Mobile"

npx jest --forceExit --detectOpenHandles --testPathPattern=tests/app-mobile