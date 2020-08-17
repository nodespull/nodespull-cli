import cmd from "../../../../sys/etc/cmd";
import { Log } from "../../../../sys/log";


export class AdminerHandler{


    /**
     * 
     * @param args [name:string, pass:string, port:string]
     */
    static create(port:string){
        new Log("-- docker output --").FgGreen().printValue()
        cmd("docker", [
            "run",
            "-d",
            "--rm",
            "-p", port+":8080",
            "--network=nodespull",
            "--name", "adminer",
            "adminer"
        ])
        new Log("--").FgGreen().printValue()
    }


    static remove(){
        new Log("-- docker output --").FgGreen().printValue()
        cmd("docker", [
            "stop",
            "adminer"
        ])
        new Log("--").FgGreen().printValue()

    }

}
