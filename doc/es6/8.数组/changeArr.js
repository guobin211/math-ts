const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
let reArr = [...arr1, ...arr2, ...arr3];
// [ 'a', 'b', 'c', 'd', 'e' ]
console.log(reArr);

let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
let arr = [...map.keys()]; // [1, 2, 3]
console.log(arr);

let resItem = [1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
}); // 10
console.log(resItem);

let resItem2 = [1, 5, 10, 15].findIndex(function(value, index, arr) {
    return value > 9;
});// 2
console.log(resItem2);

for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}
// 'a'
// 'b'
// 数组遍历器
for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
}
// 0 "a"
// 1 "b"