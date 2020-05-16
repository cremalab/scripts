#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

bash "$DIR/ci.mobile.sh"
bash "$DIR/ci.web.sh"