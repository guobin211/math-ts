// 数组去重方法一
function unique(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

// 测试去重
const arr1 = [1, 2, 3, 4, 4, 5, 6, 7, 8, 6, 5];
console.log(unique(arr1));

let arr = [
    {'name': '张三', age: 26},
    {'name': '李四', age: 12},
    {'name': '王五', age: 37},
    {'name': '赵六', age: 4}
];
// 排序函数根据传入的参数排序
const objectArraySort = function (keyName) {
    return function (objectN, objectM) {
        let valueN = objectN[keyName];
        let valueM = objectM[keyName];
        if (valueN < valueM)
            return 1;   //从大到小排序
        else if (valueN > valueM)
            return -1;
        else
            return 0
    }
};
arr.sort(objectArraySort('age'));
console.log(arr);

// 遍历数组 forEach()
let fruits = ['apple', 'banana', 'origin'];

fruits.forEach((item, index, array) =>{
    console.log(item, index);
});

fruits.forEach(function (item, index,array) {
    console.log(item,index);
});

// 添加元素到数组末尾 push(),添加到末尾pop(),删除头部shift(),添加头部unshift()

// 从一个索引位置删除多个元素
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1, n = 2;

let removedItems = vegetables.splice(pos, n);
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

console.log(vegetables);
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems);
// ["Turnip", "Radish"]

let promise = {
    'add': 'addText',
    'array': [1, 2, 3, 4, 5]
};

console.log(promise['add']);
// 数组查找
[1, 4, -5, 10].find((n) => n < 0);

[1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
});
// 10

// keys
for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1

// for (let elem of ['a', 'b'].values()) {
//     console.log(elem);
// }
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
}
// 0 "a"
// 1 "b"
