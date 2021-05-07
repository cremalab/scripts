import spawn from "cross-spawn"
import { args } from "../utils/args"
import { pathPackageTemplates } from "../utils/paths"

spawn.sync("hygen", [args()[0], "new"], {
  stdio: "inherit",
  env: { ...process.env, HYGEN_TMPLS: pathPackageTemplates() },
})
