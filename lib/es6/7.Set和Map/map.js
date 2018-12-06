const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
for (let i of s) {
    console.log(i);
}
// 2 3 5 4

let set = new Set(['red', 'green', 'blue']);
// 数据遍历
for (let item of set.keys()) {
    console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
    console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

const map = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);
console.log(map);
map.size;// 2
map.has('name'); // true
map.get('name'); // "张三"
map.has('title'); // true
map.get('title'); // "Author"
// map 转 对象
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
}

const myMap = new Map()
    .set('yes', true)
    .set('no', false);
strMapToObj(myMap);
// { yes: true, no: false }

// 对象转 map
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}

objToStrMap({yes: true, no: false});
// Map {"yes" => true, "no" => false}

// map 转json
function strMapToJson(strMap) {
    return JSON.stringify(strMapToObj(strMap));
}

let myMap1 = new Map().set('yes', true).set('no', false);
strMapToJson(myMap1);
// '{"yes":true,"no":false}'