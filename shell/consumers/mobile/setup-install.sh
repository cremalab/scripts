#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../../utils.sh"

print "INSTALLING: app-mobile dependencies"
cd ./consumers/app-mobile
npm ci
cd ../../