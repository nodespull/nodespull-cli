#!/usr/bin/env node

import {sys_commands} from "../_lib/sys/commands"
import {err} from "../_lib/sys/error"


let rootCmd = process.argv[2];
parse();

function parse(){
    if(!Object.keys(sys_commands).includes(rootCmd)) return console.log(err.cmd.unknown)
    require("../_lib/handlers/"+ sys_commands[rootCmd]+"/index.js" )
}