"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cross_spawn_1 = __importDefault(require("cross-spawn"));
function cmd(cmd, options, stream) {
    return __awaiter(this, void 0, void 0, function* () {
        if (stream) {
            const child = cross_spawn_1.default(cmd, options, { stdio: 'inherit' });
        }
        else {
            const result = cross_spawn_1.default.sync(cmd, options, { stdio: 'inherit' });
            return new Promise((resolve, reject) => {
                if (result.error == null)
                    resolve(result.output);
                reject(result.error);
            });
        }
    });
}
exports.default = cmd;
