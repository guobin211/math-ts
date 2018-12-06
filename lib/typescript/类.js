class Greeter {
    constructor(msg) {
        this.greeting = msg;
    }
    greet() {
        return "Hello__" + this.greeting;
    }
}
let greeter = new Greeter('world');
console.log(greeter.greet());
/**
 * 继承
 */
class Person {
    constructor(name) { this.name = name; }
}
class Employee extends Person {
    constructor(name, department) {
        // super 继承父类的构造方法
        super(name);
        this.department = department;
    }
    // 公共方法
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
/**
 * get
 * set
 */
let passcode = "secret passcode";
class Employees {
    // 读取属性
    get fullName() {
        return this._fullName;
    }
    // 存属性
    set fullName(newName) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let employee = new Employees();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
//# sourceMappingURL=类.js.map