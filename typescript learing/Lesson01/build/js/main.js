"use strict";
let stringArr = ['one', 'hey', 'Oscar'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr.push('new string');
guitars.unshift('Jim');
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['Van Halen', 1984, true];
let mixed = ['John', 1, true];
// Object
let myObj;
myObj = [];
console.log(typeof (myObj));
myObj = {};
const exampleObj = {
    prop1: 'Oscar',
    prop2: true,
};
exampleObj.prop2 = false;
console.log(exampleObj);
let evh = {
    name: 'Eddie Van Halen',
    active: false,
    alumns: ['Van Halen', 1984]
};
let jp = {
    name: 'Jummy',
    active: true,
    alumns: ['Led Zeppelin', 4]
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toLocaleLowerCase()}`;
    }
    return 'Hello';
};
console.log(greetGuitarist(jp));
// Enum
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.B);
