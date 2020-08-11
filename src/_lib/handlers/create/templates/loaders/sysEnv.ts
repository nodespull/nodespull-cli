export default function getSysEnvTemplate(defaultTag?:string):string{
    return `const { npEnv } = require("@nodespull/core")


/**
 * dump vars into node.js process.env
 */
npEnv.process.loadVars(forTags = [${defaultTag?'"'+defaultTag+'"':''}], {

})`
}