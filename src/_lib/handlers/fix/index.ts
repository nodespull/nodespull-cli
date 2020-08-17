
import cmd from "../../sys/etc/cmd"
import * as json from "../../sys/etc/json"

// cmd("npm", ["i", "nodespull"])
// cmd("node",["src/server.js","init"])

//change process's directory

let packageJson = json.parse(process.cwd()+"/package.json")
process.argv.push(packageJson["name"])
process.argv.push("--force")

try {
    process.chdir(process.cwd()+'/..');
    require("../create")
}
catch (err) {
    console.log('chdir: ' + err);
}