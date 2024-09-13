// type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = stringOrNumber[];

type Guitarist = {
    name?: string,
    active: boolean,
    alumns: stringOrNumberArray
}

type UserId = stringOrNumber

// literal types
let myName: 'Oscar' = 'Oscar'

let userName: 'Oscar' | 'Zoe' | 'Amy'
userName = 'Zoe'

// functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any) => {
    console.log(message)
}

logMsg('Hello World')
logMsg(add(1, 2))

let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number

let multiply: mathFunction = (a, b) => {
    return a * b
}

logMsg(multiply(2, 3))

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (c) {
        return a + b + c
    }
    return a + b
}

logMsg(addAll(1, 2))

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1, 2, 3, 4, 5))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

const numberOrString = (value: number | string): string => {
    if (typeof value === 'number') return 'number'
    if (typeof value === 'string') return 'string'
    return createError('Value must be a number or string')
}