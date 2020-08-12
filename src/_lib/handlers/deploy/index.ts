import cmd from "../../sys/etc/cmd"


cmd("node", ["src/server.js", "deploy", process.argv[3]])
