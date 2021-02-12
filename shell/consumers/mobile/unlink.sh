#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "UNLINK: consumers/app-mobile from @cremalab/scripts-mobile"

cd ./consumers/app-mobile
npm unlink @cremalab/scripts-mobile --no-save --force
cd ../../