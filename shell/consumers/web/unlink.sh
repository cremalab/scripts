#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "UNLINK: app-web from @cremalab/scripts-web"

cd consumers/app-web
npm unlink --no-save @cremalab/scripts-web
cd ../../

print "UNLINK: Remove global link for @cremalab/scripts-web"

cd packages/scripts-web
npm unlink
cd ../../