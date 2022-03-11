"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzBuzz = (num) => {
    const result = num % 3 == 0 ? "Fizz" : num;
    return result;
};
exports.default = fizzBuzz;
