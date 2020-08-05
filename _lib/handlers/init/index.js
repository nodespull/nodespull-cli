"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cmd_1 = __importDefault(require("../../sys/etc/cmd"));
const fs_1 = __importDefault(require("fs"));
const package_json_1 = __importDefault(require("./templates/loaders/package.json"));
let projectName;
if (!process.argv[3]) {
    console.log("Error: Project name not provided");
    process.exit(1);
}
else
    projectName = process.argv[3];
cmd_1.default("mkdir", [projectName]);
cmd_1.default("touch", [projectName + "/package.json"]);
fs_1.default.writeFileSync("./" + projectName + "/package.json", package_json_1.default(projectName));
cmd_1.default("npm", ["install", "--prefix " + projectName]);
cmd_1.default("git", ["init", projectName]);
//create app root file
cmd_1.default("touch", [projectName + "/src/server.js"]);
cmd_1.default("cp", [__dirname + "/templates/template.appRoot.js", projectName + "/src/server.js"]);
//install dependencies
cmd_1.default("npm", ["install", "--prefix " + projectName, "/Users/isaac/Desktop/Projects/nodespull tools/nodespull"]);
cmd_1.default("sudo", ["npm", "install", "-g", "nodemon"]);
cmd_1.default("sudo", ["npm", "install", "-g", "heroku"]);
cmd_1.default("curl", ["https://cli-assets.heroku.com/install.sh", "|", "sh"]);
cmd_1.default("node", [projectName + "/src/server.js", "init"]);
