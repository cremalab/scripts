import path from "path"
import spawn from "cross-spawn"

export const navigateToConsumer = () =>
  process.chdir(path.resolve(process.cwd(), "consumers/app-web"))

export const generateNewUtil = () => {
  return new Promise((resolve) => {
    const child = spawn("npm", ["run", "new:component"], {
      stdio: "pipe",
    })
    child.stdin?.write("foo\n")
    child.stdout?.on("data", (data) => {
      const message: string = data.toString()
      const messageUseState = message.includes("Does component use state?")
      if (messageUseState) {
        child.stdin?.write("\n")
      }
    })
    child.on("close", resolve)
  })
}

export const printTreeOfNewUtil = () =>
  spawn.sync("tree", ["src/components/Foo"]).stdout.toString()

export const deleteUtil = () =>
  spawn.sync("rm", ["-rf", "src/components/Foo"], { stdio: "inherit" })
