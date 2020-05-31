"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cmd_1 = __importDefault(require("../../sys/etc/cmd"));
cmd_1.default("npm", ["init", "-y"]);
cmd_1.default("git", ["init"]);
//create app root file
cmd_1.default("touch", ["index.js"]);
cmd_1.default("cp", [__dirname + "/templates/template.appRoot.js", "index.js"]);
//install dependencies
cmd_1.default("npm", ["i", "nodespull"]);
cmd_1.default("sudo", ["npm", "i", "-g", "nodemon"]);
cmd_1.default("sudo", ["npm", "i", "-g", "heroku"]);
cmd_1.default("curl", ["https://cli-assets.heroku.com/install.sh", "|", "sh"]);
cmd_1.default("node", ["index.js", "init"]);
