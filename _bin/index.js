#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = require("../_lib/sys/commands");
const error_1 = require("../_lib/sys/error");
let rootCmd = process.argv[2];
parse();
function parse() {
    if (!Object.keys(commands_1.sys_commands).includes(rootCmd))
        return console.log(error_1.err.cmd.unknown);
    require("../_lib/handlers/" + commands_1.sys_commands[rootCmd] + "/index.js");
}
