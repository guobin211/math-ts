let str = 'abc345efgacbbca';
// 删除指定的字符
const deleteReg = new RegExp('abc');
let   acb = new RegExp('acb');

// 邮箱正则
let szReg=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;

let a = str.replace(acb, '');
let b = a.replace(deleteReg, '');
console.log(b);

let noAbc = /[^abc]/;
// console.log(str.replace(noAbc),'');

// 闭包实现函数调用返回值 ++
function getNumber() {
    let a = 0;
    return function () {
       return a++;
    }
}
let a1 = getNumber();
let c = a1();
let d = a1();
let e = a1();
console.log(c,d,e);