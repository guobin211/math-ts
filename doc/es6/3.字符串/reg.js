// 正则表达式
const str = 'i m js, i study javascript(js)';
// 创建方式
// 1字面量或直接量
const re = /js/;
// 2构造函数
const re1 = new RegExp('js');

// 测试是否匹配
// console.log(re.test(str));
// 截取符合的字符串， 返回数组
// console.log(re.exec(str));

// 修饰符
// i   忽略大小写
// g   全局
// m   换行
// 使用修饰符
// /js/ig
// var pattern = new RegExp('js', 'i');

// 转译字符

const str2 = '// 我是注释';
const re2 = /\/\//;
// console.log(re2.exec(str2));

// const str3 = 'nba';
// const pattern = /\n/;
// console.log(pattern.exec(str3));    // null

// var str3 = '1.html\n2.css\n3.js';
// var pattern = /\n/;
// console.log(str);
// console.log(pattern.exec(str3));       // 匹配第一个\n

var str3 = '	js';
var pattern = /\t/;
console.log(pattern.exec(str3));        // \t

// var str = 'a\nb';
// var pattern = /\x61\x0A\x62/;
// console.log(pattern.exec(str));

// var str = '	js';
// var pattern = /\u0009/;
// console.log(pattern.exec(str));

