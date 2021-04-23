import spawn from "cross-spawn"

export const printFileContents = (filePath: string) => {
  return new Promise<string>((resolve, reject) => {
    const child = spawn("echo", [`"$(cat ${filePath})"`], { stdio: "pipe", shell: true })

    let contents = ""

    child.stdout?.on('data', (bff: Buffer) => {
      contents += String(bff)
    })
    
    child.on("close", () => {
      resolve(contents)
    })

    child.on("error", reject)
  })
}