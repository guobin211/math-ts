
const pick = require('./pick.js');

const res = pick({ a: 1, b: '2', c: 3, d: 'aaa' }, ['a', 'c']);

console.log(res);