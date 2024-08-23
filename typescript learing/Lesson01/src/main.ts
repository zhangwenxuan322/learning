let stringArr = ['one', 'hey', 'Oscar']
let guitars = ['Strat', 'Les Paul', 5150]
let mixedData = ['EVH', 1984, true]

stringArr.push('new string')
guitars.unshift('Jim')

let test = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Van Halen', 1984, true]
let mixed = ['John', 1, true]


// Object
let myObj: object
myObj = []
console.log(typeof (myObj))
myObj = {}

const exampleObj = {
    prop1: 'Oscar',
    prop2: true,
}

exampleObj.prop2 = false
console.log(exampleObj)

interface Guitarist {
    name?: string,
    active: boolean,
    alumns: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie Van Halen',
    active: false,
    alumns: ['Van Halen', 1984]
}

let jp: Guitarist = {
    name: 'Jummy',
    active: true,
    alumns: ['Led Zeppelin', 4]
}

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toLocaleLowerCase()}`
    }
    return 'Hello'
}

console.log(greetGuitarist(jp))

// Enum
enum Grade {
    U = 1, D, C, B, A
}

console.log(Grade.B)