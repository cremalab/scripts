import spawn from "cross-spawn"

export const validateTypeScript = () => {
  return new Promise((resolve) => {
    const child = spawn("npm", ["run", "test:types"], {
      stdio: "pipe",
    })
    child.on("close", resolve)
  })
}
