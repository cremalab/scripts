/* eslint-disable @typescript-eslint/no-var-requires */
import i from "inflection"

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt({
        type: "input",
        name: "name",
        message: "What's the name of the type?",
      })
      .then(({ name }) => ({
        name: i.camelize(name, false),
      }))
  },
}
