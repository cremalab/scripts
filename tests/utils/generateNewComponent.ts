import spawn from "cross-spawn"

type Opts = {
  withExample: boolean
  withState: boolean
}

export const generateNewComponent = ({ withExample, withState }: Opts) => {
  return new Promise((resolve) => {
    const child = spawn("npm", ["run", "new:component"], {
      stdio: "pipe",
    })
    child.stdin?.write("foo\n")
    child.stdout?.on("data", (data) => {
      const message: string = data.toString()

      // Answer the question about example code
      const messageWithExample = message.includes(
        "Did you want to generate <Foo /> with example code?",
      )
      if (messageWithExample) {
        if (withExample) {
          child.stdin?.write("y\n")
        } else {
          child.stdin?.write("n\n")
        }
      }

      // Answer the question about useState
      const messageWithState = message.includes(
        "Did you want to include useState in the example <Foo />?",
      )
      if (messageWithState) {
        if (withState) {
          child.stdin?.write("y\n")
        } else {
          child.stdin?.write("n\n")
        }
      }
    })
    child.on("close", resolve)
  })
}
