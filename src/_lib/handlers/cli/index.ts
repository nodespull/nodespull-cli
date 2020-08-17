
import cmd from "../../sys/etc/cmd"
import { Log } from "../../sys/log"

let target:string|undefined
if(!process.argv[3]) target = "app"
else target = process.argv[3]

cmd("docker", [
    "network",
    "create",
    "-d",
    "bridge",
    "nodespull"
], false)

switch(target){
    case("app"):
        cmd("node",["src/server.js","cli"])
        break
    case("docker"):
        require("./docker")
        break;
    default:
        new Log("interface-target '"+target+"' not supported").throwError().exit()
}


