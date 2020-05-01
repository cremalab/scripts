#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/utils.sh"

print "REMOTE"

print "Install app-web dependencies..."
cd ./consumers/app-web
npm i
cd ../../

bash "$DIR/web/testGenerators.sh"