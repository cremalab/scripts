import spawn from "cross-spawn"

export const generateNewUtil = (): Promise<void> => {
  return new Promise((resolve) => {
    const child = spawn("npm", ["run", "new:util"], {
      stdio: "pipe",
    })
    child.stdin?.write("foo\n")
    child.on("close", resolve)
  })
}
