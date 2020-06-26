import spawn from "cross-spawn"

export const generateNewUtil = () => {
  return new Promise((resolve) => {
    const child = spawn("npm", ["run", "new:util"], {
      stdio: "pipe",
    })
    child.stdin?.write("foo\n")
    child.on("close", resolve)
  })
}
