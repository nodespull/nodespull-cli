export default function getpackageJson(projectName:string){
    return`{
    "name": "${projectName}",
    "version": "1.0.0",
    "description": "",
    "scripts": {
        "start": "pull serve",
        "test": "pull test"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
    }
}      
`
}