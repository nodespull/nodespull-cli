"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = exports.parse = void 0;
const fs_1 = __importDefault(require("fs"));
function parse(pathFromRootFile) {
    return JSON.parse(fs_1.default.readFileSync(pathFromRootFile, 'utf8'));
}
exports.parse = parse;
function write(pathFromRootFile, json) {
    fs_1.default.writeFileSync(pathFromRootFile, JSON.stringify(json));
}
exports.write = write;
