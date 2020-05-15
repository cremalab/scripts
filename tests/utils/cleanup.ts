import spawn from "cross-spawn"

export const cleanup = () =>
  spawn.sync("git", ["clean", "-fd"], {
    stdio: "inherit",
  })
