import spawn from "cross-spawn"

export const generateNewType = (name: string): Promise<void> => {
  return new Promise((resolve) => {
    const child = spawn("npm", ["run", "new:type"], {
      stdio: "pipe",
    })
    child.stdin?.write(`${name}\n`)
    child.on("close", resolve)
  })
}
