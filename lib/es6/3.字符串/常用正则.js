// 0+
let re = /\d+$/;

// 正整数
// re = /^[0-9]*[1-9][0-9]*$/;


// re = /^(-\d)|(0+)$/;
// 负整数
// re = /^-[0-9]*[1-9][0-9]*$/;

// 整数
// re = /^-?\d+$/;

// 非负数
// re = /^\d+(\.\d+)?$/;

// re = /^[a-zA-Z]+$/;

// 数字字母下划线
// re = /^\w+$/;

// 2-4中文名
re = /^[\u4e00-\u9fa5]{2,4}$/;


// 1.QQ
// 	全是数字
// 	首位不能为0
// 	最少5位(10000)
// 	目前最多11位？

// /^[1-9]\d{4,10}$/
// /^[1-9]\d{4,}$/

// 2.昵称
// 	中、英文、数字以及下划线
// 	2-18位
// /^[\u4e00-\u9fa5a-zA-Z0-9_]{2,18}$/
// /^[\u4e00-\u9fa5\w]{2,18}$/

// 3.密码
// 	6-16位
// 	不能用空白字符\s
// /^\S{6,16}$/
// /^[\w~!@#$%^\[\]]{6,16}$/

// 4.去除字符串首尾的空白字符
// var str = '        Alex         ';
// var pattern = /^\s+/;
// console.log('|' + str.replace(pattern, '') + '|');

// var str = '        Alex         ';
// var pattern = /\s+$/;
// console.log('|' + str.replace(pattern, '') + '|');

// var str = '        Alex         ';
// var pattern = /^\s+|\s+$/g;
// console.log('|' + str.replace(pattern, '') + '|');

// var str = '        Alex         ';
// var pattern1 = /^\s+/;
// var pattern2 = /\s+$/;
// console.log('|' + str.replace(pattern1, '').replace(pattern2, '') + '|');

// 	function trim(str) {
// 		return str.replace(/^\s+/, '').replace(/\s+$/, '');
// 	}
// 	trimLeft trimRight
// 	var str = '        Alex         ';
// console.log('|' + trim(str) + '|');

// 5.转驼峰-
// 	css: background-color: red;
// 	js: elem.style.backgroundColor = 'red';
// 	jquery: $(elem).css('background-color', 'red');

// var str = 'background-color';
// var pattern = /-([a-z])/gi;
// console.log(str.replace(pattern, function (all, letter) {
// 	return letter.toUpperCase();
// }));

// function toCamelCase(str) {
// 	return str.replace(pattern, function (all, letter) {
// 		return letter.toUpperCase();
// 	})
// }

// 6.匹配HTML标签
// var str = '<p class="odd" id="odd">123</p>';
// var pattern = /<\/?[a-zA-Z]+(\s+[a-zA-Z]+=".*")*>/g;
// console.log(str.match(pattern));

// var str = '<p class="odd" id="odd">123</p>';
// var pattern = /<[^>]+>/g;
// console.log(str.match(pattern));

// var str = '<input type="text" value=">" name="username" />';
// var pattern = /<(?:[^"'>]|"[^"]*"|'[^']*')*>/g;
// console.log(str.match(pattern));

// var str = '<input type="text" value=">" name="username" />';
// var pattern = /<(?:[^"'>]|(["'])[^"']*\1)*>/g;
// console.log(str.match(pattern));

// 7.邮箱
// 	alex@yahoo.com.cn
// 	alex_1@yahoo.com.cn
// 	alex_1.a-sdasd.asdasdas.com@yah-o_o.com.adasdsd.cn
// /(?:\w+\.)*\w+@(?:\w+\.)+[a-z]/i
// /^[a-z0-9]+(?:[._-][a-z0-9]+)*@[a-z0-9]+(?:[._-][a-z0-9]+)*\.[a-z]{2,4}$/i

// 8.URL
// (协议:\/\/)主机名(:端口号)(/路径)
// ftp|http|https|mailto|file:///
// /^(https?:\/\/)?([^:\/]+)(:\d+)?(\/.*)?$/

// 匹配主机名
// /[^:\/]+/
// -www.-imos-oc.casfasf.sadasd.co-m
// ai
// /[a-z0-9]|[a-z0-9][-a-z0-9]*[a-z0-9]/i
// /^([a-z0-9]\.|[a-z0-9][-a-z0-9]*[a-z0-9]\.)*(com|edu|gov|net|org|[a-z]{2})$/i
// /^([a-z0-9]\.|[a-z0-9][-a-z0-9]*[a-z0-9]\.)*([a-z]+)$/i

// var regexp = {
// 	'chinese': /[\u4e00-\u9fa5]/, //
// 	'qq': /^[1-9]\d{4,}$/,
// 	....
// };



console.log(re.exec('-2'));     // 2