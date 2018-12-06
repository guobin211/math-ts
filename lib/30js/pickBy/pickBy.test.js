
const pickBy = require('./pickBy.js');

const res = pickBy({ a: 1, b: '2', c: 3, d: 5, e: 'aaa' }, x => typeof x === 'number');

console.log(res);
