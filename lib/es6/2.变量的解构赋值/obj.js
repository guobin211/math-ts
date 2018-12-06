const data = {
    name: 'jack',
    age: 22
};

const getData = () => {
    return {
        name: 'jack',
        age: 22
    }
};

const myData = {
  student: {}
};

let {name: myName, age: myAge } = getData();

console.log(myName, myAge);