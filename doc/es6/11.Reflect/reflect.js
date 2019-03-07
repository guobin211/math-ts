let myObject = {
    foo: 1,
    bar: 2,
    get baz() {
        return this.foo + this.bar;
    },
};
// Reflect.get方法查找并返回target对象的name属性，如果没有该属性，则返回undefined。
Reflect.get(myObject, 'foo'); // 1
Reflect.get(myObject, 'bar'); // 2
Reflect.get(myObject, 'baz'); // 3