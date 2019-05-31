/**
 * 可索引接口
 */
interface ObjectJson {
    [propName: string]: string;
}


/**
 * 定义一个接口
 */
interface Student {
    name: string;
    age: number;
    address: string;
    list: number[];
    family?: string;
}

function getStudent(student: Student) {
    console.log(`姓名：${student.name}；年龄：${student.age} ； 地址：${student.address}；`);
}

const tom: Student = {
    name: 'tom',
    age: 22,
    address: 'wuhan',
    list: [2, 3, 4]
} ;

getStudent(tom);

/**
 * 函数类型
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

// tslint:disable-next-line:only-arrow-functions
mySearch = function (s: string, sub: string) {
    const result = s.search(sub);
    return result > -1;
};

/**
 * 实现接口
 */
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {

    currentTime: Date;
    constructor(h: number, m: number) {
        this.currentTime = new Date();
    }
    setTime(d: Date) {
        this.currentTime = d;
    }
}

/**
 * 继承接口
 */
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = {} as Square;
square.color = 'red';
square.sideLength = 10;
