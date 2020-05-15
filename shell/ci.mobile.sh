#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/utils.sh"

print "Clone git submodules..."
git submodule update --remote

print "Install app-mobile dependencies..."
cd ./consumers/app-mobile
npm ci
cd ../../

bash "$DIR/mobile/testGenerators.sh"