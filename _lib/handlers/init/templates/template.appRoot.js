"use strict";
const $ = require("nodespull");
// cross-site configuration
$.config.cors([
    { domain: "*", methods: ["POST, GET, DELETE, PUT, HEAD, OPTIONS"] },
]);
// nodespull server configurations
const conf = {
    use_database: true
};
//launch main processes
$.server.ready(conf);
