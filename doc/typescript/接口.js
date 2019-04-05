function getStudent(student) {
    console.log(`姓名：${student.name}；年龄：${student.age} ； 地址：${student.address}；`);
}
const tom = {
    name: 'tom',
    age: 22,
    address: 'wuhan',
    list: [2, 3, 4]
};
getStudent(tom);
let mySearch;
mySearch = function (s, sub) {
    let result = s.search(sub);
    return result > -1;
};
class Clock {
    setTime(d) {
        this.currentTime = d;
    }
    constructor(h, m) {
    }
}
let square = {};
square.color = 'red';
square.sideLength = 10;
//# sourceMappingURL=接口.js.map