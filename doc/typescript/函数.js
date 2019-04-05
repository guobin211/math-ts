function add(x, y) {
    console.log(x + y);
}
/**
 * 完整函数类型
 * 函数类型
 * 函数返回值
 * @param x
 * @param y
 */
let myAdd = function (x, y) {
    return x + (y || 0);
};
console.log(myAdd(5));
/**
 * 泛型
 * @param arg
 */
function identity(arg) {
    return arg;
}
const test = identity({ name: 'jack' });
const b = identity(123);
console.log(test);
console.log(b);
//# sourceMappingURL=函数.js.map