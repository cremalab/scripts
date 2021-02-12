#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../utils.sh"

print "GLOBAL LINKS BEFORE"
npm ls -g --depth=0 --link=true

print "LINKING: Create @cremalab/scripts-mobile global symlink"

cd ./packages/scripts-mobile
npm unlink @cremalab/scripts-mobile --force
npm link --force
cd ../../

print "LINKING: Create @cremalab/scripts-web global symlink"

cd ./packages/scripts-web
npm unlink @cremalab/scripts-web --force
npm link --force
cd ../../

print "LINKING: Link packages together"
print "!!! This is very important"

npm run link

print "GLOBAL LINKS AFTER"
npm ls -g --depth=0 --link=true