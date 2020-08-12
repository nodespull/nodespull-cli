"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAppRootTemplate(projectName) {
    return `/**
    * SERVER SETUP
    */
    
    const np = require("@nodespull/core")
    
    
    /* cross-site configurations */
    np.config.security({
        cors: [ {domain: "localhost", methods: ["POST", "GET", "DELETE", "PUT", "HEAD", "OPTIONS"]} ]
    })
    
    
    /* server configurations */
    np.config.server({
        port: 3000
    })
    
    
    /* nodespull cloud adapter */
    np.CloudAdapter.setKey(null)
    
    
    /* serve with nodespull */
    np.ready()
       
`;
}
exports.default = getAppRootTemplate;
