import cmd from "../../sys/etc/cmd"

cmd("npm",["init", "-y"])
cmd("git", ["init"])

//create app root file
cmd("touch",["index.js"])
cmd("cp", [__dirname+"/templates/template.appRoot.js", "index.js" ])

//install dependencies
cmd("npm",["i", "nodespull"])
cmd("sudo",["npm","i","-g","nodemon"])
cmd("sudo",["npm","i","-g","heroku"])
cmd("curl", ["https://cli-assets.heroku.com/install.sh", "|", "sh"])
cmd("node", ["index.js", "init"])
