
const orderBy = require('./orderBy.js');

const users = [
    { name: 'fred', age: 48 },
    { name: 'barney', age: 36 },
    { name: 'fred', age: 40 }
    ];

const result = orderBy(users, ['age']);

console.log(result);