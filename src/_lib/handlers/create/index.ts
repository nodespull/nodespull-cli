import cmd from "../../sys/etc/cmd"
import fs from "fs"
import getAppRootfileTempalte from "./templates/loaders/appRoot"
import getPackageJsonTemplate from "./templates/loaders/package.json"
import getSysEnvTemplate from "./templates/loaders/sysEnv"

import { cpus } from "os"
import { Log } from "../../sys/log"


if(process.argv[3] == "--help"){
    console.log(`pull: help -- creates a new nodespull project`)
    process.exit()
}


let projectName:string|undefined
if(!process.argv[3]) new Log("Project name not provided").throwError().exit()
else projectName = process.argv[3]


if(fs.existsSync("./"+projectName) && !["--force","-f"].includes(process.argv[4])) new Log(`folder '${projectName}' already exists`).throwError().exit()


cmd("mkdir",[projectName!])
cmd("touch",[projectName+"/package.json"])
fs.writeFileSync("./"+projectName+"/package.json",getPackageJsonTemplate(projectName!))
// cmd("git", ["init", projectName])

//create app root file
cmd("mkdir",["-p", projectName+"/src"])
cmd("touch",[projectName+"/src/server.js"])
fs.writeFileSync( projectName+"/src/server.js", getAppRootfileTempalte(projectName!))
// cmd("cp", [__dirname+"/templates/template.appRoot.js", projectName+"/src/server.js" ])

//install dependencies
cmd("npm",["install", "--silent", "--prefix", projectName!, "/Users/isaac/Desktop/Projects/nodespull tools/nodespull.js"], false)
console.log("npm ['nodemon', 'heroku', 'mocha', 'mysql'] require admin permission")
cmd("sudo",["npm","install","-g", "--force", "--silent" , "nodemon"])
cmd("sudo",["npm","install","-g", "--force", "--silent" , "heroku"])
cmd("sudo",["npm","install","-g", "--force", "--silent", "mocha"])
//cmd("curl", ["https://cli-assets.heroku.com/install.sh", "|", "sh"])


//change process's directory
try {
    process.chdir(process.cwd()+'/'+projectName);
    builde2eDir()
    buildConfigDir()
    cmd("node", ["./src/server.js", "init", projectName!])
    console.log("Fixing vulnerabilities..")
    cmd("npm",["audit","--silent" ,"fix"], false)
    console.log("100% - complete.")
}
catch (err) {
    console.log('chdir: ' + err);
}


function builde2eDir(){
    cmd("mkdir",["-p","e2e/"])
    cmd("touch",["e2e/readme.md"])
    fs.writeFileSync("./e2e/readme.md","Note: nodespull@v1 entrusts developers to set e2e testing, though a future version will include native management.")

    // cmd("mkdir", ["-p", "e2e/environment"])
    // cmd("touch",["e2e/environment/test.local.env.js"])
    // cmd("touch",["e2e/environment/test.prod.env.js"])
    // fs.writeFileSync("./e2e/environment/test.local.env.js",getTestEnvTemplate("local"))
    // fs.writeFileSync("./e2e/environment/test.local.env.js",getTestEnvTemplate("production"))
    // cmd("mkdir", ["-p", "e2e/resources/reports"])
    // cmd("mkdir", ["-p", "e2e/resources/utils"])
    // cmd("mkdir", ["-p", "e2e/spec"])
    // cmd("mkdir", ["-p", "e2e/validation/common"])
    // cmd("touch", ["e2e/config.json"])
    // fs.writeFileSync("./e2e/config.json",getTestConfigTemplate())
}

function buildConfigDir(){
    cmd("mkdir", ["-p", "config"])
    cmd("touch",["./config/sys.local.env.js"])
    cmd("touch",["./config/sys.prod.env.js"])
    fs.writeFileSync("./config/sys.local.env.js",getSysEnvTemplate())
    fs.writeFileSync("./config/sys.prod.env.js",getSysEnvTemplate("--prod"))
}