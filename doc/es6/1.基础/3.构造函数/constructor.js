function Person() {
    this.name = "tom";
    this.age = 19;
}
// 原型链
Person.prototype={
    getAge:function () {
        console.log(this.age);
    },
    // 构造函数，原型的指向
    constructor: Person
};
var f = new Person();
console.log(f);
f.getAge();