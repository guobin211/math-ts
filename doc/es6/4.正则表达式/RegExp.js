// 正则表达式匹配 i 修饰符
let regName = new RegExp('abc', 'i');
// 等价于
let cloneRegName = /abc/i;

console.log(regName.test('a')); // false
console.log(regName.test('abc')); // true

let regex = /t(e)(st(\d?))/g;
let string = 'test1test2test3';
// 字符串匹配
let matches = [];
let match;
// 匹配多个
while (match = regex.exec(string)) {
    matches.push(match);
}
console.log(matches);
