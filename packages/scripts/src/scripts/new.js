import spawn from "cross-spawn";
import { pathPackage, pathConsumer } from "../utils/paths";
// import { args } from "../utils/args"
import path from "path";
var pathPackageTemplates = path.join(pathPackage(), "dist/_templates");
var pathConsumerTemplates = path.join(pathConsumer(), "_templates");
spawn.sync("ln", ["-sf", pathPackageTemplates, pathConsumerTemplates]);
// spawn.sync("hygen", [args()[0], "new"], { stdio: "inherit" })
spawn.sync("rm", [pathConsumerTemplates]);
