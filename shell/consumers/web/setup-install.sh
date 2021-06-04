#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "INSTALLING: app-web dependencies\nNode: $(node -v) | NPM: $(npm -v)"
cd ./consumers/app-web
npm ci
cd ../../