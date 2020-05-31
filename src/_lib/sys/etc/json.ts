import fs from "fs"

export function parse(pathFromRootFile:string){
    return JSON.parse(fs.readFileSync(pathFromRootFile, 'utf8'));
}

export function write(pathFromRootFile:string, json:any){
    fs.writeFileSync(pathFromRootFile, JSON.stringify(json));
}