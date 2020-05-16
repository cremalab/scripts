#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../utils.sh"

print "TEARDOWN"

cd consumers/app-web
rm -rf node_modules/@cremalab/scripts-web
npm unlink --no-save @cremalab/scripts-web
npm install @cremalab/scripts-web
cd ../../

cd packages/scripts-web
npm unlink
cd ../../

print "SHOW LINKS"

npm ls -g --depth=0 --link=true