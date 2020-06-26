#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../utils.sh"

print "CLONING: git submodules"
git submodule update --remote

print "INSTALLING: app-web dependencies"
cd ./consumers/app-web
npm ci
cd ../../

print "BUILDING: @cremalab/scripts"

npm run build

print "LINKING: Local lib"

cd packages/scripts-web
npm unlink # Just in case
npm link
cd ../../

print "LINKING: Consumer"

cd consumers/app-web
npm link @cremalab/scripts-web
cd ../../

print "BOOTSTRAPING"

npx lerna bootstrap