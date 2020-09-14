#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../utils.sh"

# print "BOOTSTRAPPING"

# npx lerna bootstrap

# print "LINKING: Create global link for @cremalab/scripts"

# cd packages/scripts
# npm link
# cd ../../

print "LINKING: Create global link for @cremalab/scripts-mobile"

cd packages/scripts-mobile
npm link
cd ../../

print "LINKING: Create global link for @cremalab/scripts-web"

cd packages/scripts-web
npm link
cd ../../

print "SHOW LINKS"

npm ls -g --depth=0 --link=true