import path from "path"

export const pathConsumer = (): string => process.cwd()
export const pathPackage = (d = __dirname): string => {
  return path.relative(pathConsumer(), path.join(d, "../..")) || "./"
}
