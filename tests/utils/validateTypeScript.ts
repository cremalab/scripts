import spawn from "cross-spawn"

export const validateTypeScript = () => {
  return new Promise((resolve) => {
    const child = spawn("npm", ["run", "test:types"], {
      stdio: "pipe",
    })

    let msg = ""

    child.stdout?.on("data", (error) => {
      msg += String(error)
    })

    child.on("close", (signal) => {
      if (signal === 1) {
        resolve(msg)
      } else {
        resolve("")
      }
    })
  })
}
