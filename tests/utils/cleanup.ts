import spawn from "cross-spawn"

export const cleanup = (path: string) => () => {
  spawn.sync("rm", ["-rf", path], {
    stdio: "inherit",
  })
}
