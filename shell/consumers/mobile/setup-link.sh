#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "LINKING: Link consumers/app-mobile to global symlink @cremalab/scripts-mobile"

cd consumers/app-mobile
npm link @cremalab/scripts-mobile
cd ../../