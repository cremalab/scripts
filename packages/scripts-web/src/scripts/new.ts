import path from "path"
import { args, pathConsumer, pathPackage } from "@cremalab/scripts"
import spawn from "cross-spawn"

const pathPackageTemplates = path.join(pathPackage(__dirname), "_templates")
const pathConsumerTemplates = path.join(pathConsumer(), "_templates")

spawn.sync("ln", ["-sf", pathPackageTemplates, pathConsumerTemplates])
spawn.sync("hygen", [args()[0], "new"], { stdio: "inherit" })
spawn.sync("rm", [pathConsumerTemplates])
