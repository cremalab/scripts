import camelcase from "camelcase"

export const nameFormat = (name: string, pascalCase: boolean): string =>
  camelcase(name.trim(), { pascalCase })
