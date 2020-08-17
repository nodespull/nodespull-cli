import cmd from "../../sys/etc/cmd"
import { Log } from "../../sys/log"

let target:string|undefined
if(!process.argv[3]) new Log("deployment target not specified").throwError().exit()
else target = process.argv[3]

switch(target){
    case("help"):
        console.log(`pull: help -- deploys app to cloud provider\ntargets: ${new Log("heroku").FgGreen().getValue()}`)
        break
    case("heroku"):
        cmd("node", ["src/server.js", "deploy", process.argv[3]])
        break
    default:
        new Log("deployment target '"+target+"' not supported").throwError().exit()
}
