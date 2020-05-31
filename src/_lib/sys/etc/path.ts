

export function getAppPath(){
    let pathDirs = __dirname.split("/")
    if(pathDirs.includes("node_modules")) return __dirname.split("node_modules")[0]
    return __dirname.split("nodespull-cli")[0]+"nodespull-cli/"
}