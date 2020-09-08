import { Log } from "../../sys/log";

console.log(`

Available commands:
____________________________________________________________________
Commands   Arguments                Descriptions                
____________________________________________________________________
i          <none>|docker            interactive cli
create     <name>                   create project using name
deploy     <target>                 deploy app to cloud target
help                                detail pull commands
fix                                 repair missing files issue
migrate    up|down <link> <flag>    migrate db to|from staged schema
serve                               serve nodespull project
test                                run unit tests with mocha
version                             see pull version
_____________________________________________________________________

${new Log("serve with Flag").FgGreen().getValue()} details
--prod|--dev|<custom> : trailing flag is used to set environment

${new Log("migrate with Flag").FgGreen().getValue()} details
--readonly |-r : does not alter the database, updates models only
--freeze   |-f : does not update the model version
Example: migrate up myConn.link -r -f

${new Log("deep help").FgGreen().getValue()} info
use 'help' as argument to learn more about any command

`);