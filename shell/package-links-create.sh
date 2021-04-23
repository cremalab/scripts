#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/utils.sh"

print "Linking packages globally..."

print "Global links before we start..."
npm ls -g --depth=0 --link=true

print "LINKING: Create link for @cremalab/scripts"
cd packages/scripts
npm link
cd ../../

print "LINKING: Create link for @cremalab/scripts-mobile"
cd packages/scripts-mobile
npm link
cd ../../

print "LINKING: Create link for @cremalab/scripts-web"
cd packages/scripts-web
npm link
cd ../../

print "Global links..."
npm ls -g --depth=0 --link=true
