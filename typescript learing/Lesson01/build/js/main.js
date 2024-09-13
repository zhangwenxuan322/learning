"use strict";
// literal types
let myName = 'Oscar';
let userName;
userName = 'Zoe';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello World');
logMsg(add(1, 2));
let subtract = function (c, d) {
    return c - d;
};
let multiply = (a, b) => {
    return a * b;
};
logMsg(multiply(2, 3));
// optional parameters
const addAll = (a, b, c) => {
    if (c) {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(1, 2));
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const numberOrString = (value) => {
    if (typeof value === 'number')
        return 'number';
    if (typeof value === 'string')
        return 'string';
    return createError('Value must be a number or string');
};
