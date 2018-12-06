
const pull = require('./pull.js');


let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];

pull(myArray, 'a', 'c');

console.log(myArray);
