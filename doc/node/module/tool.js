// 定义一个 tools.js 的模块
const tools = {
    sayHello: function() {
        return 'hello NodeJS';
    },
    add: function(x, y) {
        return x + y;
    }
};
// 模块接口的暴露
module.exports = tools;

// 引入自定义的 tool.js 模块
// const tools = require('./module/tool.js');
// // 使用模块
// tools.sayHello();
// console.log(tools.sayHello());
// console.log(tools.add(5,9));
