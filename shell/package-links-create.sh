#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/utils.sh"

print "Linking packages globally..."

print "Global links before we start..."
npm ls -g --depth=0 --link=true

print "Create global @cremalab/scripts link..."
cd packages/scripts
npm link
cd ../../

print "Global links..."
npm ls -g --depth=0 --link=true

print "Create global @cremalab/scripts-web link..."
cd packages/scripts-web
npm link --force
npm link @cremalab/scripts
cd ../../

print "Global links..."
npm ls -g --depth=0 --link=true

print "Create global @cremalab/scripts-mobile link..."
cd packages/scripts-mobile
npm link --force
npm link @cremalab/scripts
cd ../../

print "Global links..."
npm ls -g --depth=0 --link=true
