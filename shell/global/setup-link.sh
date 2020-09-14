#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../utils.sh"

print "LINKING: Create link for @cremalab/scripts"

cd packages/scripts
npm unlink # Just in case
npm link
cd ../../