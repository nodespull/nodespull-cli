#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const commands_1 = require("../_lib/sys/commands");
const error_1 = require("../_lib/sys/error");
let rootCmd = process.argv[2];
parse();
function parse() {
    let outOfDirCommands = ["create", "v", "version"];
    if (!Object.keys(commands_1.sys_commands).includes(rootCmd)) {
        console.log(error_1.err.cmd.unknown);
        process.exit(1);
    }
    if (Object.keys(commands_1.sys_commands).includes(rootCmd) && !outOfDirCommands.includes(rootCmd))
        if (!fs_1.default.existsSync("./package.json")) {
            console.log(error_1.err.cmd.not_a_project_directory);
            process.exit(1);
        }
    require("../_lib/handlers/" + commands_1.sys_commands[rootCmd] + "/index.js");
}
