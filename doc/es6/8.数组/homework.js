console.log("ok");
// 1. 变量作用域问题
var code = null;
function fn1(n) {
    n = n || code++;
    return ++code;
}
// 全局 code = null; fn1()没有传递参数,n = undefined; code++为1，null自动转换为数字
// ++code 结果为2
var n = fn1();
// 结果为 2
console.log(n);
// fn1(2)的结果 ++code为3
n = fn1(n);
console.log(n);

var a =3;
function A(a, b) {
    b++;
    console.log(a);
    var a;
    return b+a;
}
// a=3 a++值为3; a++执行后,a=4;
var b = A(a, a++);
// a=4, b=7
console.log(a, b);

function fn3(a) {
    return a;
}
// a++ 作为参数传入,值为4
var c = fn3(a++);
console.log(c);