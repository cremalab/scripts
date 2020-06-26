#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../utils.sh"

print "TESTING: Mobile Generators"

npx jest --detectOpenHandles -i --testPathPattern=tests/app-mobile