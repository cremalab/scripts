import spawn from "cross-spawn"

export const generateNewComponent = () => {
  return new Promise((resolve) => {
    const child = spawn("npm", ["run", "new:component"], {
      stdio: "pipe",
    })
    child.stdin?.write("foo\n")
    child.stdout?.on("data", (data) => {
      const message: string = data.toString()
      const messageUseState = message.includes("Did you want to generate")
      if (messageUseState) {
        child.stdin?.write("\n")
      }
    })
    child.on("close", resolve)
  })
}
