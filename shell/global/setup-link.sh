#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../utils.sh"

print "LINKING: Create @cremalab/scripts-mobile global symlink"

cd packages/scripts-mobile
sudo npm link --force
cd ../../

print "LINKING: Create @cremalab/scripts-web global symlink"

cd packages/scripts-web
sudo npm link --force
cd ../../

print "LINKING: Link packages together"
print "!!! This is very important"

sudo npm run link