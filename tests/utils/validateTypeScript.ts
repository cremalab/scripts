import spawn from "cross-spawn"

export const validateTypeScript = () => {
  return new Promise<string>((resolve) => {
    const child = spawn("tsc", {
      stdio: "pipe",
    })

    let msg = ""

    child.stdout?.on("data", (error) => {
      msg += String(error)
    })

    child.on("close", (signal) => {
      if (signal === 0) {
        resolve("")
      } else {
        resolve(msg)
      }
    })
  })
}
