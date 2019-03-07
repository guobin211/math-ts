const data = ['jack', 'jone', 'name'];
const obj = {
    name: 'zhang',
    phone: 13326465421
};

console.log(data);

for (let key in obj) {
    console.log(key);
}

for (let key in data) {
    console.log(key);
}

for (let el of data){
    console.log(el)
}

const iterable = new Map([['one', 1], ['two', 2]]);

for (const [key, value] of iterable) {
    console.log(`Key: ${key} and Value: ${value}`);
}

const iterableSet = new Set([1, 1, 2, 2, 1]);

for (const value of iterableSet) {
    console.log(value);
}

