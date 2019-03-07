/**
 * 事件
 * 订阅发布
 */

function Person(name) {
  this.name = name;
  this._events = {};
}
//  注册监听
Person.prototype.on = function (eventName, callback) {
  if (this._events[eventName]) {
    this._events[eventName].push(callback);
  } else {
    this._events[eventName] = [callback];
  }
};

Person.prototype.emit = function (eventName) {
  const args = Array.prototype.slice.call(arguments, 1);
  const callbacks = this._events[eventName];
  callbacks.forEach( callback => {
    //  箭头函数避免this作用域问题
    callback.apply(this, args)
  })
};

const boy = new Person();
//  监听事件
boy.on('6年级', () => {
  console.log('6年级')
});

boy.on('6年级', () => {
  console.log('7年级')
});
// 发射事件
boy.emit('6年级');
