
const pullAtValue = require('./pullAtValue.js');

let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtValue(myArray, ['b', 'd']);

// let myArray2 = [{name: 'jack'}, {name: 'lucy'}];
// let pulled2 = pullAtValue(myArray2, [{name: 'jack'}]);

console.log(pulled);
// console.log(pulled2);