import spawn from "cross-spawn"

export const cleanup = (path: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const child = spawn("rm", ["-rf", path])

    child.on("close", resolve)

    child.on("error", reject)
  })
}
