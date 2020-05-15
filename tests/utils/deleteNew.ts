import spawn from "cross-spawn"

export const deleteNew = (
  where: "components" | "types" | "utils",
  name: string,
  isFile?: boolean,
) => () =>
  spawn.sync("rm", [isFile ? "" : "-rf", `src/${where}/${name}`], {
    stdio: "inherit",
  })
