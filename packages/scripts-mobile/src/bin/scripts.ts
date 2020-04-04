#!/usr/bin/env node
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import spawn from "cross-spawn"

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", (err) => {
  throw err
})

const args = process.argv.slice(2)
const scriptIndex = args.findIndex((x) => x === "new")
const script = scriptIndex === -1 ? args[0] : args[scriptIndex]
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : []

const commands = [
  { args: ["new", "component"], binary: "cremalab-scripts-web" },
  { args: ["new", "type"], binary: "cremalab-scripts" },
  { args: ["new", "util"], binary: "cremalab-scripts" },
]

const command = commands.find(
  (com) => com.args[0] === args[0] && com.args[1] === args[1],
)

if (command && command.binary === "cremalab-scripts-web") {
  const result = spawn.sync(
    "node",
    nodeArgs
      .concat(require.resolve("../scripts/" + script))
      .concat(args.slice(scriptIndex + 1)),
    { stdio: "inherit" },
  )
  if (result.signal) {
    if (result.signal === "SIGKILL") {
      console.log(
        "The build failed because the process exited too early. " +
          "This probably means the system ran out of memory or someone called " +
          "`kill -9` on the process.",
      )
    } else if (result.signal === "SIGTERM") {
      console.log(
        "The build failed because the process exited too early. " +
          "Someone might have called `kill` or `killall`, or the system could " +
          "be shutting down.",
      )
    }
    process.exit(1)
  }
  process.exit(result.status || undefined)
} else if (command && command.binary === "cremalab-scripts") {
  const result = spawn.sync("cremalab-scripts", command.args, {
    stdio: "inherit",
  })
  if (result.signal) {
    if (result.signal === "SIGKILL") {
      console.log(
        "The build failed because the process exited too early. " +
          "This probably means the system ran out of memory or someone called " +
          "`kill -9` on the process.",
      )
    } else if (result.signal === "SIGTERM") {
      console.log(
        "The build failed because the process exited too early. " +
          "Someone might have called `kill` or `killall`, or the system could " +
          "be shutting down.",
      )
    }
    process.exit(1)
  }
  process.exit(result.status || undefined)
} else {
  console.log('Unknown script "' + script + '".')
  console.log("Perhaps you need to update react-scripts?")
  console.log(
    "See: https://facebook.github.io/create-react-app/docs/updating-to-new-releases",
  )
}
