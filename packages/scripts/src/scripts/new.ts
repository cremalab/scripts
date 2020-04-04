import path from "path"
import spawn from "cross-spawn"
import { args } from "../utils/args"
import { pathConsumer, pathPackage } from "../utils/paths"

const pathPackageTemplates = path.join(pathPackage(), "_templates")
const pathConsumerTemplates = path.join(pathConsumer(), "_templates")

spawn.sync("ln", ["-sf", pathPackageTemplates, pathConsumerTemplates])

spawn.sync("hygen", [args()[0], "new"], { stdio: "inherit" })
spawn.sync("rm", [pathConsumerTemplates])
