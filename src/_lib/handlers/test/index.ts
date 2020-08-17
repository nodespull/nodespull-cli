
import cmd from "../../sys/etc/cmd"

if(process.argv[3] == "help"){
    console.log("pull: help -- runs unit tests with mocha")
    process.exit()
}

cmd("node",["src/server.js","test"])


