export default function getpackageJson(projectName:string){
    return`{
    "name": "${projectName}",
    "version": "1.0.0",
    "description": "",
    "scripts": {
        "start": "node src/server.js serve",
        "test": "node src/server.js test"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
    }
}      
`
}