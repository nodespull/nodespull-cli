"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.err = void 0;
exports.err = {
    cmd: {
        unknown: "\npull: '" + process.argv[2] + "' command not found\
        \n run 'pull help' to see available commands\n",
        not_a_project_directory: "pull: 'package.json' not found in current directory"
    }
};
