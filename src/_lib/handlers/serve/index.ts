
import cmd from "../../sys/etc/cmd"

if(process.argv[3] == "help"){
    console.log("pull: help -- starts nodespull server")
    process.exit()
}

cmd("nodemon",["--quiet", "src/server.js", "serve"])


