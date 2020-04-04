import path from "path";
export var pathConsumer = function () { return process.cwd(); };
export var pathPackage = function () {
    return path.relative(pathConsumer(), path.join(__dirname, "../../..")) || "./";
};
