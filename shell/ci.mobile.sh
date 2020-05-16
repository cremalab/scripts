#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/utils.sh"

bash "$DIR/mobile/setup.sh"
bash "$DIR/mobile/testGenerators.sh"
bash "$DIR/mobile/teardown.sh"