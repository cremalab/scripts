import spawn from "cross-spawn"

export const generateNewUtil = (name: string): Promise<void> => {
  return new Promise((resolve) => {
    const child = spawn("npm", ["run", "new:util"], {
      stdio: "pipe",
    })
    child.stdin?.write(`${name}\n`)
    child.on("close", resolve)
  })
}
