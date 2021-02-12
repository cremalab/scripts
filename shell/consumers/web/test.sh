#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "TESTING: Web"

npx jest --forceExit --detectOpenHandles --runInBand --testPathPattern=tests/app-web