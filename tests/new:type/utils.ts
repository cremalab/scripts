import path from "path"
import spawn from "cross-spawn"

export const navigateToConsumer = () =>
  process.chdir(path.resolve("consumers/app-web"))

export const navigateToProject = () => process.chdir("../../")

export const generateNewUtil = () => {
  return new Promise((resolve) => {
    const child = spawn("npm", ["run", "new:type"], {
      stdio: "pipe",
    })
    child.stdin?.write("foo\n")
    child.on("close", resolve)
  })
}

export const printTreeOfNewUtil = () =>
  spawn.sync("tree", ["--noreport", "./src/types"]).stdout.toString()

export const deleteUtil = () =>
  spawn.sync("rm", ["./src/types/Foo.ts"], { stdio: "inherit" })
