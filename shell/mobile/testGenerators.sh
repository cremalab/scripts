#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../utils.sh"

print "1. Create link for @cremalab/scripts-mobile..."

npm run build

cd packages/scripts-mobile
npm unlink # Just in case
npm link
cd ../../

print "2. Link app-mobile to @cremalab/scripts-mobile..."

cd consumers/app-mobile
npm link @cremalab/scripts-mobile
cd ../../

print "3. Lerna bootstrap..."

npx lerna bootstrap

print "4. Run Unit Tests..."

npx jest --detectOpenHandles -i --testPathPattern=tests/app-mobile

print "5. Teardown links..."

cd consumers/app-mobile
rm -rf node_modules/@cremalab/scripts-mobile
npm unlink --no-save @cremalab/scripts-mobile
npm install @cremalab/scripts-mobile
cd ../../

cd packages/scripts-mobile
npm unlink
cd ../../

print "6. Show links..."

npm ls -g --depth=0 --link=true