import path from "path"

export const pathConsumer = () => process.cwd()
export const pathPackage = (d = __dirname) => {
  return path.relative(pathConsumer(), path.join(d, "../..")) || "./"
}
