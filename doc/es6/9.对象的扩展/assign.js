const obj = {
    name: 'jack',
    age: 22
};

let myObj = {};
Object.assign(myObj, obj);

console.log(myObj);

console.log(obj === myObj);

console.log(Object.is(obj, myObj));

console.log(Object.is(+0, -0));

console.log(Object.is(NaN, NaN));

