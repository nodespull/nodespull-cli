export default function getTestEnvTemplate(env:string):string{
    return `const { npTestEnv } = require("nodespull")

npTestEnv({
    production: ${env=="production"},
})
`
}