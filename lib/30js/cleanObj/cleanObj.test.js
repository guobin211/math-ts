const cleanObj = require('./cleanObj.js');

const testObj = { a: 1, b: 2, children: { a: 1, b: 2 } };

const result = cleanObj(testObj, 'a', 'children');

console.log(result);

