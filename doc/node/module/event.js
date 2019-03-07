const events = require('events');
// 事件广播处理器
// 实例化事件对象
let EventEmitter =new events.EventEmitter();
// 接收广播
EventEmitter.on('eventName',(data) => {
    console.log(`接收到广播数据是：${data.name}`);
});
setTimeout( () => {
    let data = {
        "name": "张三"
    };
    console.log('发送广播:' + data.name);
    // 发送广播
    EventEmitter.emit('eventName', data);
},1000);
