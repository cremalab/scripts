#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../utils.sh"

print "1. Create link for @cremalab/scripts-web..."

npm run build

cd packages/scripts-web
npm unlink # Just in case
npm link
cd ../../

print "2. Link app-web to @cremalab/scripts-web..."

cd consumers/app-web
npm link @cremalab/scripts-web
cd ../../

print "3. Lerna bootstrap..."

npx lerna bootstrap

print "4. Run Unit Tests..."

npx jest --detectOpenHandles -i --testPathPattern=tests/app-web

print "5. Teardown links..."

cd consumers/app-web
rm -rf node_modules/@cremalab/scripts-web
npm unlink --no-save @cremalab/scripts-web
npm install @cremalab/scripts-web
cd ../../

cd packages/scripts-web
npm unlink
cd ../../

print "6. Show links..."

npm ls -g --depth=0 --link=true