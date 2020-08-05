"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTestEnvTemplate(env) {
    return `const { npTestEnv } = require("nodespull")

npTestEnv({
    production: ${env == "production"},
})
`;
}
exports.default = getTestEnvTemplate;
