#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/utils.sh"

bash "$DIR/web/setup.sh"
bash "$DIR/web/tests.sh"
bash "$DIR/web/teardown.sh"