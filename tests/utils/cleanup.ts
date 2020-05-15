import spawn from "cross-spawn"

export const cleanup = () =>
  spawn.sync("git", ["checkout", "."], {
    stdio: "inherit",
  })
