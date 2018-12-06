const foo = 'bar';
const baz = {foo};
console.log(baz); // {foo: "bar"}

// 等同于
// const baz = {foo: foo};

class Point {
    constructor(x, y) {
        Object.assign(this, {x, y});
    }
}
// 为对象添加方法
Object.assign(Point.prototype, {
    getName(arg1, arg2) {
        return arg1 + arg2;
    },
    setName(arg2) {
        return arg2;
    }
});
console.log(Point);
// 等同于下面的写法
// SomeClass.prototype.someMethod = function (arg1, arg2) {
// ···
// };
// SomeClass.prototype.anotherMethod = function () {
// ···
// };
// 属性的遍历
let attrArr = Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 });
console.log(attrArr);

// this关键字总是指向函数所在的当前对象
// ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。
const proto = {
    foo: 'hello'
};

const obj1 = {
    foo: 'world',
    find() {
        return super.foo;
    }
};

Object.setPrototypeOf(obj1, proto);
obj1.find(); // "hello"
// 遍历对象
let obj = { one: 1, two: 2 };
for (let [k, v] of Object.entries(obj)) {
    console.log(
        `${JSON.stringify(k)}: ${JSON.stringify(v)}`    // "one": 1 "two": 2
    );
}
// entries 把对象转化成map结构
const obj2 = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj2));
console.log(map);
// Map { foo: "bar", baz: 42 }