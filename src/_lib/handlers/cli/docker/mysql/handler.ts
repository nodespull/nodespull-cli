import cmd from "../../../../sys/etc/cmd";
import { Log } from "../../../../sys/log";
import { StringParser } from "../../common/string-validator";
import { error } from "../index"

export class MysqlHandler{

    /**
     * 
     * @param args [name:string, pass:string, port:string]
     */
    static create(args:string[]){
        let defaultDatabase = "default"
        let serverFlagInd = args.indexOf("--name"); if(serverFlagInd < 0 || serverFlagInd+1 > args.length-1) throw error.wrongUsage
        let passFlagInd = args.indexOf("--pass"); if(passFlagInd < 0 || passFlagInd+1 > args.length-1) throw error.wrongUsage
        let portFlagInd = args.indexOf("--port"); if(portFlagInd < 0 || portFlagInd+1 > args.length-1) throw error.wrongUsage
        let serverName = args[serverFlagInd+1]
        let password = args[passFlagInd+1]
        let port = args[portFlagInd+1]
        if(!StringParser.isExtendedAlphaNum_DashAllowed(serverName)) throw error.falseNameFormat
        if(!StringParser.isExtendedAlphaNum(password)) throw error.falseNameFormat
        if(isNaN(Number(port))) throw error.falseNameFormat

        new Log("-- docker output --").FgGreen().printValue()
        cmd("docker", [
            "run",
            "-d",
            "--rm",
            "-p", port+":3306",
            "--network=nodespull",
            "-e", "MYSQL_ROOT_PASSWORD="+password,
            "-e", "MYSQL_DATABASE="+defaultDatabase,
            "--name", serverName,
            "mysql"
        ])
        new Log("--").FgGreen().printValue()
    }


    static remove(dbName:string){
        new Log("-- docker output --").FgGreen().printValue()
        cmd("docker", [
            "stop",
            dbName
        ])
        new Log("--").FgGreen().printValue()
    }

}
