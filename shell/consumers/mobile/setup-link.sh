#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "LINKING: Link app-mobile to @cremalab/scripts-mobile"

cd consumers/app-mobile
npm link --force ../../packages/scripts-mobile
cd ../../