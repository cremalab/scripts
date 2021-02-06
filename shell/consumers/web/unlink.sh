#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "UNLINK: consumers/app-web from @cremalab/scripts-web"

cd consumers/app-web
npm unlink --no-save --force @cremalab/scripts-web
cd ../../
