import { customStdinResponse, userInput, cliStack } from "../common/stdin"
import { Log } from "../../../sys/log";
import { StringParser } from "../common/string-validator";
import { MysqlHandler } from "./mysql/handler"
import cmd from "../../../sys/etc/cmd";
import { AdminerHandler } from "./adminer/handler";

let stdinInterface:customStdinResponse
start()
export function start(){
    new Log(`\n*** Nodespull Interactive: Docker ext ***  \n(enter 'help' for info)`).printValue()
    main();
}

async function main(){
    stdinInterface = userInput("\n>> ");
    let input = await stdinInterface.getPromise()
    getCmd(input, true);
}


export async function getCmd(input:string, loop:boolean, options?:CliCmdOptions_interface){
    if(input != cliStack[cliStack.length-1] && input.length > 0) cliStack.push(input)
    if(input == "clear"){
        stdinInterface.interface.removeAllListeners()
        stdinInterface.interface.close()
        process.stdout.write('\x1b[2J');
        process.stdout.moveCursor(0, -1*process.stdout.rows);
        new Log(`\n*** Nodespull Interactive: Docker ***  \n(enter 'help' for info)`).printValue()
        return main()
    }
    let createCmd = ["create", "c"];
    let deleteCmd = ["remove", "rm"]
    try{
        let args = input.split(" ");
        if(args[0] == "docker") {cmd("docker",[...args.slice(1)]); return main()}
        if(["ls", "ps"].includes(args[0])) {cmd("docker",["ps"]); return main()}

        let userCmd = args[0];
        if(["help","h","info","?"].includes(userCmd)) return help();
        if(["q","quit","exit"].includes(userCmd)) return exit();
        if(userCmd.trim() == "") return !loop?null:main();

        switch (args[1]) {
            case "mysql":
                if(createCmd.includes(userCmd)) {
                    if(args.length != 8) throw error.wrongUsage
                    MysqlHandler.create(args.slice(2));
                }
                else if(deleteCmd.includes(userCmd)){
                    if(!args[2]) throw error.wrongUsage
                    MysqlHandler.remove(args[2]);
                }
                else throw error.falseCmd;
                break
            case "adminer":
                if(createCmd.includes(userCmd)) {
                    if(!args[2]) throw error.wrongUsage
                    AdminerHandler.create(args[2]);
                }
                else if(deleteCmd.includes(userCmd)){
                    AdminerHandler.remove();
                }
                break
            default:
                throw error.falseCmd;
        }

        if(loop) main()
    }catch(e){
        console.log(e);
        if(loop) main();
    }
}


function help(){
    console.log(`
Available commands:
___________________________________________________________________
Commands       Arguments                Descriptions                
___________________________________________________________________
create|remove   mysql               spawn|destroy msql server
                adminer             lunch|remove relational db ui
ps                                  show running docker containers
docker                              see 'docker --help'
___________________________________________________________________

${new Log("db server").FgGreen().getValue()} usage
c  mysql --name <name> --pass <password> --port <port>
rm mysql <name>
system values are user:'root', db:'default'

${new Log("adminer").FgGreen().getValue()} usage
c  mysql --name <name> --pass <password> --port <port>
rm adminer

`);
    main();
}



function exit(){
    new Log("Exiting Interactive mode...").FgBlue().printValue()
}


export const error = {
    falseCmd: new Log("ERR: Command not recognized. Enter `help` for info").FgRed().getValue(),
    falseNameFormat: new Log("ERR: arg format incorrect").FgRed().getValue(),
    wrongUsage: new Log("ERR: command usage incorrect").FgRed().getValue()
}


interface CliCmdOptions_interface{
    silent:boolean
}