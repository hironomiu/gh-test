"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fizzBuzz_1 = __importDefault(require("./libs/fizzBuzz"));
const main = () => {
    const ret = (0, fizzBuzz_1.default)(10);
    console.log(ret);
    return 1;
};
main();
exports.default = main;
