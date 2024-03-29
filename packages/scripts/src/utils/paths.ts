import path from "path"

export const pathConsumer = (): string => process.cwd()

export const pathPackage = (d = __dirname): string => {
  return path.relative(pathConsumer(), path.join(d, "../..")) || "./"
}

export const pathPackageTemplates = (d = __dirname): string =>
  path.join(pathPackage(d), "_templates")
