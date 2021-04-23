#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "UNLINK: app-mobile from @cremalab/scripts-mobile"

cd consumers/app-mobile
npm unlink --no-save @cremalab/scripts-mobile
npm i
cd ../../