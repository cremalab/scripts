#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "INSTALLING: app-web dependencies"
cd ./consumers/app-web
npm i
cd ../../