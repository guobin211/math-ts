const all = require('./all.js');

let a = all([4, 2, 3], x => x > 1); // true
let b = all([1, 2, 3]); // true

console.log(a, b);