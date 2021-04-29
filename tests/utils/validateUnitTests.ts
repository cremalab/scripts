import spawn from "cross-spawn"

export const validateUnitTests = (testPath: string) => {
  return new Promise<string>((resolve) => {
    const child = spawn("npm", ["run", "test:unit", "--", "--useStderr", "--runTestsByPath", testPath], {
      stdio: "pipe",
      env: { ...process.env, "SKIP_PREFLIGHT_CHECK": "true", CI: "true" }
    })

    let msg = ""

    child.stderr?.on("data", (buffer: Buffer) => {
      msg += String(buffer)
    })

    child.on("close", (signal) => {
      if (signal === 0) {
        resolve(`PASS ${testPath}`)
      } else {
        resolve(msg)
      }
    })
  })
}
