import spawn from "cross-spawn"

type Opts = {
  name: string,
  withExample: boolean
  withState: boolean
}

export const generateNewComponent = ({ name, withExample, withState }: Opts) => {
  return new Promise<void>((resolve) => {
    const child = spawn("npm", ["run", "new:component"], {
      stdio: "pipe",
    })
    child.stdin?.write(name + "\n")
    child.stdout?.on("data", (data) => {
      const message: string = data.toString()

      // Answer the question about example code
      const messageWithExample = message.includes(
        `Did you want to generate <${name} /> with example code?`,
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
        `Did you want to include useState in the example <${name} />?`,
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
