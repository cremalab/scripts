const { nameFormat } = require("../../../dist/utils/nameFormat")

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt({
        type: "input",
        name: "name",
        message: "What's the name of the utility?",
      })
      .then(({ name }) => ({
        name: nameFormat(name, false),
      }))
  },
}
