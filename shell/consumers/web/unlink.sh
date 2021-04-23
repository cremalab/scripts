#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "UNLINK: app-web from @cremalab/scripts-web"

cd consumers/app-web
npm unlink @cremalab/scripts-web --no-save
npm i
cd ../../