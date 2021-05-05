import spawn from "cross-spawn"

type Opts = {
  name: string
  withExample: boolean
  withState: boolean
}

export const generateNewComponent = ({
  name,
  withExample,
  withState,
}: Opts): Promise<void> => {
  /**
   * Tracking message match counts
   * ------------------------------
   * This is necessary because it has proved tricky to match a prompt only once.
   * We only (so far) care about responding to the first instance of a prompt, so we
   * only respond when there's a match and the current count is `0`. If you have a
   * better idea, I'd love to see it!
   */
  let messageComponentNameCount = 0
  let messageWithExampleCount = 0
  let messageWithStateCount = 0

  return new Promise<void>((resolve) => {
    const child = spawn("npm", ["run", "new:component"], {
      stdio: "pipe",
    })

    child.stdout?.on("data", (data) => {
      const message: string = data.toString()

      const messageComponentName = message.includes(`Component name:`)
      if (messageComponentName && messageComponentNameCount === 0) {
        messageComponentNameCount += 1
        child.stdin?.write(name + "\n")
      }

      // Answer the question about example code
      const messageWithExample = message.includes(
        `Did you want to generate <${name} /> with example code?`,
      )
      if (messageWithExample && messageWithExampleCount == 0) {
        messageWithExampleCount += 1
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

      if (messageWithState && messageWithStateCount === 0) {
        messageWithStateCount += 1
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
