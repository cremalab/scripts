#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/utils.sh"

print "Clone git submodule..."
sudo git submodule update --init


print "Install app-web dependencies..."
cd ./consumers/app-web
sudo npm i
cd ../../

sh "$DIR/web/testGenerators.sh"