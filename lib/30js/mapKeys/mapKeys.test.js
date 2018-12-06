
const mapKeys = require('./mapKeys.js');

const result = mapKeys({name: 'jack', age: 22, sex: 'man'}, (val, key) => {
  console.log(key);
  console.log(val);
  return {'newname': val, 'newage': val, 'newsex': val};

});

console.log(result);