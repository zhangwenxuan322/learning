console.log('Hello World');
// console.log(global)

const os = require('os');
const path = require('path');
const math = require('./math');

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(os.platform());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

console.log(math.add(1, 2));
console.log(math.subtract(1, 2));
console.log(math.multiply(1, 2));
console.log(math.divide(1, 2));