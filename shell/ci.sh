#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/utils.sh"

print "Clone git submodule..."
git submodule update --remote

print "Install app-mobile dependencies..."
cd ./consumers/app-mobile
npm i
cd ../../

bash "$DIR/mobile/testGenerators.sh"

print "Install app-web dependencies..."
cd ./consumers/app-web
npm i
cd ../../

bash "$DIR/web/testGenerators.sh"