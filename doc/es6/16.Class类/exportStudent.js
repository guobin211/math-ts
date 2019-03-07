class Student {
    // 构造函数
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    /**
     * 静态方法
     * @return {Student}
     */
    static getStudent() {
        return new Student('mary', 22, 'wuhan');
    }

    /**
     * 继承方法
     * @param name
     */
    reName(name) {
        this.name = name;
    }
    /**
     * 继承方法
     */
    printStudent() {
        console.log(`${this.name} from ${this.city} and 年龄是 ${this.age}`)
    }
}


const tom = new Student();

console.log(tom);

tom.printStudent();

tom.reName('tom');

console.log(tom);

const mary = Student.getStudent();

console.log(mary);

mary.printStudent();

