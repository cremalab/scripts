import path from "path"
import spawn from "cross-spawn"

export const navigateToConsumer = () =>
  process.chdir(path.resolve(__dirname, "../../consumers/app-web"))

export const generateNewUtil = () => {
  return new Promise((resolve) => {
    const child = spawn("npm", ["run", "new:util"], {
      stdio: "pipe",
    })
    child.stdin?.write("foo\n")
    child.on("close", resolve)
  })
}

export const printTreeOfNewUtil = () =>
  spawn.sync("tree", ["src/utils/foo"]).stdout.toString()

export const deleteUtil = () =>
  spawn.sync("rm", ["-rf", "src/utils/foo"], { stdio: "inherit" })
