#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "LINKING: Create link for @cremalab/scripts-web"

cd packages/scripts-web
npm link
cd ../../

print "LINKING: Link app-web to @cremalab/scripts-web"

cd consumers/app-web
npm link @cremalab/scripts-web
cd ../../