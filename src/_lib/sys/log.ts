export class Log { 

    constructor(private message:string){}

    exit(){
        process.exit()
    }

    setValue(message:string):Log{ this.message = message; return this}
    getValue():string{ return this.message }
    printValue():void { console.log(this.message)}
    
    throwError(flag?:string):Log{ console.log("pull: "+new Log(this.message).FgRed().getValue()); return this }
    throwWarn(flag?:string):Log{ console.log("pull: "+new Log(this.message).FgYellow().getValue()); return this }

    FgRed():Log{ this.applyFgFormat("\x1b[31m"); return this }
    FgGreen():Log{ this.applyFgFormat("\x1b[32m"); return this}
    FgYellow():Log{ this.applyFgFormat("\x1b[33m"); return this}
    FgBlue():Log{ this.applyFgFormat("\x1b[34m"); return this}
    FgMagenta():Log{ this.applyFgFormat("\x1b[35m"); return this}
    FgCyan():Log{ this.applyFgFormat("\x1b[36m"); return this}
    FgWhite():Log{ this.applyFgFormat("\x1b[37m"); return this}

    BgRed():Log{ this.applyBgFormat("\x1b[41m"); return this }
    BgGreen():Log{ this.applyBgFormat("\x1b[42m"); return this}
    BgYellow():Log{ this.applyBgFormat("\x1b[43m"); return this}
    BgBlue():Log{ this.applyBgFormat("\x1b[44m"); return this}
    BgMagenta():Log{ this.applyBgFormat("\x1b[45m"); return this}
    BgCyan():Log{ this.applyBgFormat("\x1b[46m"); return this}
    BgWhite():Log{ this.applyBgFormat("\x1b[47m"); return this}

    private applyFgFormat(format:string){ this.message = format+this.message+"\x1b[0m"; }
    private applyBgFormat(format:string){ this.message = format+this.message+"\x1b[0m"; }
}
