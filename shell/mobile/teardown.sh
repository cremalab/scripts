#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../utils.sh"

print "TEARDOWN"

cd consumers/app-mobile
rm -rf node_modules/@cremalab/scripts-mobile
npm unlink --no-save @cremalab/scripts-mobile
npm install @cremalab/scripts-mobile
cd ../../

cd packages/scripts-mobile
npm unlink
cd ../../

print "SHOW LINKS"

npm ls -g --depth=0 --link=true