#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../utils.sh"

print "UNLINKING: Remove global link for @cremalab/scripts"

cd packages/scripts
npm unlink
cd ../../