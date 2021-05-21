import i from "inflection"

export const nameFormat = (name: string): string =>
  i.camelize(name.trim(), false)
