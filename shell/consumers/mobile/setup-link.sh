#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "LINKING: Create link for @cremalab/scripts-mobile"

cd packages/scripts-mobile
npm unlink # Just in case
npm link
cd ../../

print "LINKING: Link app-mobile to @cremalab/scripts-mobile"

cd consumers/app-mobile
npm link @cremalab/scripts-mobile
cd ../../