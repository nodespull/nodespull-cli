
import cmd from "../../sys/etc/cmd"

if(process.argv[3] == "--help"){
    console.log("pull: help -- starts nodespull server")
    process.exit()
}

let flags = process.argv.filter(arg=>{if(arg.slice(0,2)=="--")return arg})

cmd("nodemon",["--quiet", "src/server.js", "serve", ...flags])
