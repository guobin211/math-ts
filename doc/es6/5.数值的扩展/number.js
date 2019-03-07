// ES6的写法
Number.parseInt('12.34'); // 12
Number.parseFloat('123.45#'); // 123.45
// 整数判断
Number.isInteger(25); // true
Number.isInteger(25.1); // false
// 向下取整数部分
Math.trunc(4.9); // 4
Math.trunc(-4.1); // -4
// 指数运算
console.log(2**3);  //8

let a = 1.5;
a **= 2;
// 等同于 a = a * a;

let b = 4;
b **= 3;
// 等同于 b = b * b * b;
console.log(Math.ceil(3.45));