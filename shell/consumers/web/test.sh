#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "TESTING: Web"

npm ls -g --depth=0 --link=true
npx jest --forceExit --detectOpenHandles --runInBand --testPathPattern=tests/app-web