#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/utils.sh"

print "Linking packages globally..."

print "Global links before we start..."
npm ls -g --depth=0 --link=true

print "Bootstrap packages and hoist binaries for linking..."
npm run bootstrap

print "Global links..."
npm ls -g --depth=0 --link=true
