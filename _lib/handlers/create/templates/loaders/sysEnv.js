"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSysEnvTemplate(defaultTag) {
    return `const { npEnv } = require("@nodespull/core")


/**
 * dump vars into node.js process.env
 */
npEnv.process.loadVars(forTags = [${defaultTag ? '"' + defaultTag + '"' : ''}], {

})`;
}
exports.default = getSysEnvTemplate;
