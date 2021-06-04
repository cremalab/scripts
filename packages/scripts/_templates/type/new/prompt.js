const { nameFormat } = require("../../../dist/utils/nameFormat")

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt({
        type: "input",
        name: "name",
        message: "What's the name of the type?",
      })
      .then(({ name }) => ({
        name: nameFormat(name, true),
      }))
  },
}
