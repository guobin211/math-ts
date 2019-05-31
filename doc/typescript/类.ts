class Greeter {
    greeting: string;
    constructor(msg: string) {
        this.greeting = msg;
    }
    greet() {
        return "Hello__"  + this.greeting;
    }
}

let greeter = new Greeter('world');

console.log(greeter.greet());

/**
 * 继承
 */
class Person {
    // 受保护的属性
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    // 私有属性  只读属性
    private readonly department: string;

    constructor(name: string, department: string) {
        // super 继承父类的构造方法
        super(name);
        this.department = department;
    }
    // 公共方法
    public getElevatorPitch() {
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
    private _fullName: string | undefined;
    // 读取属性
    get fullName(): string {
        // @ts-ignore
        return this._fullName;
    }
    // 存属性
    set fullName(newName: string) {
        if (passcode && passcode === "secret passcode") {
            this._fullName = newName;
        } else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employees();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}

