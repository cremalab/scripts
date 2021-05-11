import { args, pathPackageTemplates } from "@cremalab/scripts"
import spawn from "cross-spawn"

spawn.sync("hygen", [args()[0], "new"], {
  stdio: "inherit",
  env: { ...process.env, HYGEN_TMPLS: pathPackageTemplates(__dirname) },
})
