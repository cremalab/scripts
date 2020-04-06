#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../utils.sh"



print "1. Create link for @cremalab/scripts-web..."

sudo npm run build

cd packages/scripts-web
sudo npm unlink # Just in case
sudo npm link
cd ../../

print "2. Link app-web to @cremalab/scripts-web..."

cd consumers/app-web
sudo npm link @cremalab/scripts-web
cd ../../

print "3. Lerna bootstrap..."

sudo npx lerna bootstrap

print "4. Run Unit Tests..."

sudo npx jest --detectOpenHandles -i

print "5. Teardown links..."

cd consumers/app-web
sudo rm -rf node_modules/@cremalab/scripts-web
sudo npm unlink --no-save @cremalab/scripts-web
sudo npm install @cremalab/scripts-web
cd ../../

cd packages/scripts-web
sudo npm unlink
cd ../../

print "6. Show links..."

sudo npm ls -g --depth=0 --link=true