#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/utils.sh"

print "Removing global package links..."

print "Global links before we start..."
npm ls -g --depth=0 --link=true

print "Remove global @cremalab/scripts-mobile link..."
cd packages/scripts-mobile
npm unlink -g --no-save @cremalab/scripts-mobile
cd ../../

print "Global links..."
npm ls -g --depth=0 --link=true

print "Remove global @cremalab/scripts-web link..."
cd packages/scripts-web
npm unlink -g --no-save @cremalab/scripts-web
cd ../../

print "Global links..."
npm ls -g --depth=0 --link=true

print "Remove global @cremalab/scripts link..."
cd packages/scripts
npm unlink -g --no-save @cremalab/scripts
cd ../../

print "Global links..."
npm ls -g --depth=0 --link=true