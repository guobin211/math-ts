
const without = require('./without.js');

const myArr = ['a', 'b', 1, 3, null, true];

const myArr2 = [{name: 'jack', age: 22}, {name: 'ton', age: 12}, {name: 'lucy', age: 18}];

const res = without(myArr, 'b', null);

// const res2 = without(myArr2, (item) => {
//   console.log(item);
//   return item.age > 17;
// });

console.log(res);

// console.log(res2);