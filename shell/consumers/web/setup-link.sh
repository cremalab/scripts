#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "LINKING: Link app-web to @cremalab/scripts-web"

cd consumers/app-web
npm link --force ../../packages/scripts-web
cd ../../