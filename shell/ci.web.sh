#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/utils.sh"

print "Clone git submodules..."
git submodule update --remote

print "Install app-web dependencies..."
cd ./consumers/app-web
npm ci
cd ../../

bash "$DIR/web/testGenerators.sh"