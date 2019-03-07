// var str = 'css html js';
// var pattern = /html|css|js/;
// console.log(pattern.exec(str));

// var str = 'ab';
// var pattern = /a|ab/;
// console.log(pattern.exec(str));

// var str = 'abab';
// var pattern = /(ab)+/;
// console.log(pattern.exec(str));

// var str = 'abcd';
// var pattern = /(ab)c/;
// console.log(pattern.exec(str));

// var str = 'abcd';
// var pattern = /(?:ab)c/;
// console.log(pattern.exec(str));

// var str = 'abcd';
// var pattern = /(ab)(c)/;
// console.log(pattern.exec(str));

// var str = 'abcd';
// var pattern = /(a(b(c)))/;
// console.log(pattern.exec(str));

// var str = 'ab cd ab';
// var pattern = /(ab) cd \1/;
// console.log(pattern.exec(str));

// var str = '<p><a>这是一段文字</a></p>';
// var pattern = /<([a-zA-Z]+)>(.*?)<\/\1>/;       // . 禁止贪婪匹配  \1 引用第二个分组
// console.log(pattern.exec(str));

var str = '中国军队和阿扁一起办证';
var pattern = /国军|阿扁|办证/g;
// console.log(str.replace(pattern, '*'));
console.log(str.match(pattern));


// var str = '中国军队和阿扁一起办证';
// var pattern = /国军|阿扁|办证/g;
// console.log(str.replace(pattern, function ($0) {
// 	// console.log($0);
// 	var result = '';
// 	for (var i = 0; i < $0.length; i++) {
// 		result += '*';
// 	}
//
// 	return result;
// }));



