#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../utils.sh"

# MOBILE ----------------------------------------------------------

print "UNLINK: Remove @cremalab/scripts-mobile global symlink"

cd ./packages/scripts-mobile
npm unlink --force
cd ../../

# WEB -------------------------------------------------------------

print "UNLINK: Remove @cremalab/scripts-web global symlink"

cd ./packages/scripts-web
npm unlink --force
cd ../../