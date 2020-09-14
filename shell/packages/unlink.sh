#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../utils.sh"

print "UNLINKING: Remove global link for @cremalab/scripts"

cd packages/scripts
npm unlink
cd ../../

print "UNLINKING: Remove global link for @cremalab/scripts-mobile"

cd packages/scripts-mobile
npm unlink
cd ../../

print "UNLINKING: Remove global link for @cremalab/scripts-web"

cd packages/scripts-web
npm unlink
cd ../../

print "SHOW LINKS: Should be empty"

npm ls -g --depth=0 --link=true