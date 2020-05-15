import spawn from "cross-spawn"

export const generateNewType = () => {
  return new Promise((resolve) => {
    const child = spawn("npm", ["run", "new:type"], {
      stdio: "pipe",
    })
    child.stdin?.write("foo\n")
    child.on("close", resolve)
  })
}
