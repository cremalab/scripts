#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../utils.sh"

print "CLONING: git submodules"
git submodule update --remote

print "INSTALLING: app-mobile dependencies"
cd ./consumers/app-mobile
npm ci
cd ../../

print "BUILDING: @cremalab/scripts"

npm run build

print "LINKING: Local lib"

cd packages/scripts-mobile
npm unlink # Just in case
npm link
cd ../../

print "LINKING: Consumer"

cd consumers/app-mobile
npm link @cremalab/scripts-mobile
cd ../../

print "BOOTSTRAPING"

npx lerna bootstrap