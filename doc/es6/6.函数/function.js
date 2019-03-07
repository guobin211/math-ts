// 函数参数默认值
function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello'); // Hello World
log('Hello', 'China'); // Hello China
log('Hello', '');// Hello

function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}
const p = new Point();
console.log(p);  // { x: 0, y: 0 }
// 作用域问题
let foo = 'outer';
function bar(func = () => foo) {
    let foo = 'inner';
    console.log(func());
}
bar(); // outer
// 多个参数
function add(...values) {
    let sum = 0;
    for (let val of values) {
        sum += val;
    }
    return sum;
}
add(2, 5, 3); // 10

// 正常函数写法
[1,2,3].map(function (x) {
    return x * x;
});
// 箭头函数写法
[1,2,3].map(x => x * x);

