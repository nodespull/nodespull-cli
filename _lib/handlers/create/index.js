"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cmd_1 = __importDefault(require("../../sys/etc/cmd"));
const fs_1 = __importDefault(require("fs"));
const appRoot_1 = __importDefault(require("./templates/loaders/appRoot"));
const package_json_1 = __importDefault(require("./templates/loaders/package.json"));
const sysEnv_1 = __importDefault(require("./templates/loaders/sysEnv"));
let projectName;
if (!process.argv[3]) {
    console.log("Error: Project name not provided");
    process.exit(1);
}
else
    projectName = process.argv[3];
if (fs_1.default.existsSync("./" + projectName)) {
    console.log(`Error: folder '${projectName}' already exists`);
    process.exit(1);
}
cmd_1.default("mkdir", [projectName]);
cmd_1.default("touch", [projectName + "/package.json"]);
fs_1.default.writeFileSync("./" + projectName + "/package.json", package_json_1.default(projectName));
// cmd("git", ["init", projectName])
//create app root file
cmd_1.default("mkdir", ["-p", projectName + "/src"]);
cmd_1.default("touch", [projectName + "/src/server.js"]);
fs_1.default.writeFileSync(projectName + "/src/server.js", appRoot_1.default(projectName));
// cmd("cp", [__dirname+"/templates/template.appRoot.js", projectName+"/src/server.js" ])
//install dependencies
cmd_1.default("npm", ["install", "--silent", "--prefix", projectName, "/Users/isaac/Desktop/Projects/nodespull tools/nodespull.js"]);
console.log("(setup for npm 'nodemon', 'mocha', and 'heroku' require admin level access)");
cmd_1.default("sudo", ["npm", "install", "-g", "--force", "--silent", "nodemon"], false);
cmd_1.default("sudo", ["npm", "install", "-g", "--force", "--silent", "mocha"], false);
cmd_1.default("sudo", ["npm", "install", "-g", "--force", "--silent", "heroku"], false);
//cmd("curl", ["https://cli-assets.heroku.com/install.sh", "|", "sh"])
//change process's directory
try {
    process.chdir(process.cwd() + '/' + projectName);
    builde2eDir();
    buildConfigDir();
    cmd_1.default("node", ["./src/server.js", "init", projectName]);
    console.log("Fixing vulnerabilities..");
    cmd_1.default("npm", ["audit", "--silent", "fix"]);
}
catch (err) {
    console.log('chdir: ' + err);
}
function builde2eDir() {
    cmd_1.default("mkdir", ["-p", "e2e/"]);
    cmd_1.default("touch", ["e2e/readme.md"]);
    fs_1.default.writeFileSync("./e2e/readme.md", "Note: nodespull@v1 entrusts developers to set e2e testing, though a future version will include native management.");
    // cmd("mkdir", ["-p", "e2e/environment"])
    // cmd("touch",["e2e/environment/test.local.env.js"])
    // cmd("touch",["e2e/environment/test.prod.env.js"])
    // fs.writeFileSync("./e2e/environment/test.local.env.js",getTestEnvTemplate("local"))
    // fs.writeFileSync("./e2e/environment/test.local.env.js",getTestEnvTemplate("production"))
    // cmd("mkdir", ["-p", "e2e/resources/reports"])
    // cmd("mkdir", ["-p", "e2e/resources/utils"])
    // cmd("mkdir", ["-p", "e2e/spec"])
    // cmd("mkdir", ["-p", "e2e/validation/common"])
    // cmd("touch", ["e2e/config.json"])
    // fs.writeFileSync("./e2e/config.json",getTestConfigTemplate())
}
function buildConfigDir() {
    cmd_1.default("mkdir", ["-p", "config"]);
    cmd_1.default("touch", ["./config/sys.local.env"]);
    cmd_1.default("touch", ["./config/sys.prod.env"]);
    fs_1.default.writeFileSync("./config/sys.local.env", sysEnv_1.default());
    fs_1.default.writeFileSync("./config/sys.prod.env", sysEnv_1.default("--prod"));
}
