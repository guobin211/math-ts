
const mapObject = require('./mapObject.js');

const arrData = ['name', 'age', 'sex'];

const objData = {a: 'jack', b: '18', c: 'man'};

const valueData = Object.keys(objData);

//  根据传入的string 替换 obj 的 key
const resetObjectKeys = (arr, obj) => mapObject(arr, (item, index) => {
  // console.log(item);
  // console.log(index);
  const val =  Object.values(obj);
  return val[index];
});

const result = resetObjectKeys(arrData, objData);

console.log(result);
