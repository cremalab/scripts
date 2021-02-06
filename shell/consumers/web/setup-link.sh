#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "LINKING: Link consumers/app-web to global symlink @cremalab/scripts-web"

cd consumers/app-web
npm link @cremalab/scripts-web
cd ../../