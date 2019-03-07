function add(x: number, y: number): void {
    console.log(x + y);
}

/**
 * 完整函数类型
 * 函数类型
 * 函数返回值
 * @param x
 * @param y
 */
let myAdd: (x: number, y?: number) => number = function (x: number, y?: number): number {
    return x + (y || 0);
};

console.log(myAdd(5));

/**
 * 泛型
 * @param arg
 */
function identity<T>(arg: T): T {
    return arg;
}

const test = identity({name: 'jack'});
const b = identity(123);

console.log(test);
console.log(b);
