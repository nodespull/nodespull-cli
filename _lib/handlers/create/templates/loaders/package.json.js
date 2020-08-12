"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getpackageJson(projectName) {
    return `{
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
        "@nodespull/core": "^1.0",
        "@nodespull/cli": "^1.0"
    }
}      
`;
}
exports.default = getpackageJson;
