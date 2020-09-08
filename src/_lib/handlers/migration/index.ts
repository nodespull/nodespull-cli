const readline = require('readline');
import cmd from "../../sys/etc/cmd"


let readOnly = (process.argv.includes("--readonly") || process.argv.includes("-r"))?"--readonly":""
let freeze = (process.argv.includes("--freeze") || process.argv.includes("-f"))?"--freeze":""

if(!process.argv[3]){
    console.log("pull: migrate argument not provided")
    process.exit(1)
}
if(!process.argv[4] || process.argv[4].split(".")[1]!="link"){
    console.log("pull: error at database link selector")
    process.exit(1)
}
let linkName = process.argv[4].split(".")[0]



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
if(readOnly != "--readonly") rl.question(`\n\x1b[33mThis action might modify your database ${freeze=="--freeze"?"- with frozen model version":""}\x1b[0m\nenter 'alter' to continue. > `, (answer:any) => {
    if(answer.toLowerCase() != 'alter'){
        console.log("migration aborted..")
        process.exit(0)
    }
    router()
    rl.close();
});
else {
    if(freeze=="--freeze")console.log("\nfreezing version..")
    router()
    rl.close();
}



function router(){
    switch(process.argv[3]){
        case ("help"):{
            console.log("pull: help -- migrates database to|from staged schema")
            break
        }
        case("up"):{
            cmd("node",["src/server.js", "migrate","up", linkName, readOnly, freeze])
            break
        }
        case("down"):{
            cmd("node", ["src/server.js", "migrate","down", linkName, readOnly, freeze])
            break
        }
        default:
            console.log("pull: migrate argument '"+process.argv[3]+"' not recognized")
    }
}