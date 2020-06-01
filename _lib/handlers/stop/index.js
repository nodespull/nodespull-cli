"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cmd_1 = __importDefault(require("../../sys/etc/cmd"));
cmd_1.default("node", ["index.js", "stop", "-c"]);
