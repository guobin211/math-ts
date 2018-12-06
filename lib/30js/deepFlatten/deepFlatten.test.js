
const deepFlatten = require('./deepFlatten.js');

const res = deepFlatten([1, [2], [[3], 4], 5]);

console.log(res);