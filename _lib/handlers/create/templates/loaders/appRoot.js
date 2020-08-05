"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAppRootTemplate(projectName) {
    return `/**
* APP SERVER INFRASTRUCTURE
* main config file
*/

const np = require("@nodespull/core")


/* cross-site configurations */
np.config.cors([
    { domain: "localhost", methods: "POST, GET, DELETE, PUT, HEAD, OPTIONS" }
])

/* authentication options */
np.config.authentication({
    sessionSecret: process.env.SESSION_SECRET,
    uses: [ np.confOptions.auth.jwtSession ]
})

/* app modules options */
np.config.appModules({
    useGraphQL: true,
})

/* database configurations */
np.config.database({
    SQL: {
        system: np.confOptions.dbSys.mySQL,
        DUI_Port: 3501,
        DUI_Name: "np-dbui",
        database: "${projectName}-db",
        DMS_Port: process.env.DB_SQL_PORT,
        host: process.env.DB_SQL_HOST,
        username: process.env.DB_SQL_USER,
        password: process.env.DB_SQL_PASS
    },
    noSQL: {
        system: np.confOptions.dbSys.mongodb,
        database: "${projectName}-db",
        port: process.env.DB_NOSQL_PORT,
        host: process.env.DB_NOSQL_HOST,
        username: process.env.DB_NOSQL_USER,
        password: process.env.DB_NOSQL_PASS
    }
})


/* nodespull cloud adapter */
np.setAdapter_API_KEY(null)


/* nodespull server configurations */
np.server.ready({
    port: process.env.SERVER_PORT,
    use_database: false
})
   
`;
}
exports.default = getAppRootTemplate;
