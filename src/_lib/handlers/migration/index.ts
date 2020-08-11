
import cmd from "../../sys/etc/cmd"


let prodFlag = process.argv.includes("--prod")?"--prod":""

if(!process.argv[3]){
    console.log("pull: migrate argument not provided")
    process.exit(1)
}
if(!process.argv[4]){
    console.log("pull: database selector not provided")
    process.exit(1)
}
switch(process.argv[3]){
    case("upload"):{
        cmd("node",["src/server.js", "migrate","up", process.argv[4], prodFlag])
        break
    }
    case("revert"):{
        cmd("node", ["src/server.js", "migrate","down", process.argv[4], prodFlag])
        break
    }
    default:
        console.log("pull: migrate argument '"+process.argv[3]+"' not recognized")
}

