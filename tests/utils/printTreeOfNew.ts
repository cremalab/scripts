import spawn from "cross-spawn"

export const printTreeOfNew = (
  where: "components" | "types" | "utils",
  name?: string,
): string =>
  spawn
    .sync("tree", [`src/${where}${name ? `/${name}` : ``}`])
    .stdout.toString()
