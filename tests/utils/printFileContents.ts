import spawn from "cross-spawn"

export const printFileContents = (filePath: string) =>
  spawn
    .sync("echo", [`"$(cat ${filePath})"`], { shell: true })
    .stdout.toString()
