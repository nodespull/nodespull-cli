#!/usr/bin/env node

import fs from "fs"
import {sys_commands} from "../_lib/sys/commands"
import {err} from "../_lib/sys/error"


let rootCmd = process.argv[2];
parse();


function parse(){
    let outOfDirCommands = ["create", "v","version"]

    if(!Object.keys(sys_commands).includes(rootCmd)){
        console.log(err.cmd.unknown)
        process.exit(1)
    }
    if(Object.keys(sys_commands).includes(rootCmd) && !outOfDirCommands.includes(rootCmd))
        if(!fs.existsSync("./package.json")){
            console.log(err.cmd.not_a_project_directory)
            process.exit(1)
        }
    require("../_lib/handlers/"+ sys_commands[rootCmd]+"/index.js" )
}