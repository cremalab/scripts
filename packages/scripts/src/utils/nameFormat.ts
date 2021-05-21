import i from "inflection"

export const nameFormat = (name: string, lowFirstLetter = false): string =>
  i.camelize(name.trim(), lowFirstLetter)
