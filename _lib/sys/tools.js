"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppPath = void 0;
function getAppPath() {
    let pathDirs = __dirname.split("/");
    if (pathDirs.includes("node_modules"))
        return __dirname.split("node_modules")[0];
    return __dirname.split("nodespull-cli")[0] + "nodespull-cli/";
}
exports.getAppPath = getAppPath;
