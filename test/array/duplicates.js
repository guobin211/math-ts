const arr = ['a', 1, 2, 'a', 3, 2, 'b'];

for (let i = 0; i < 100000; i++) {
  const num = parseInt(Math.random() * 10)
  arr.push(num);
}

// set
const res1 = [...new Set(arr)];  //  [ 'a', 1, 2, 3, 'b' ]
console.log(res1);
console.log(arr);
// filter
const res2 = arr.filter((item, index) => arr.indexOf(item) === index);  //  [ 'a', 1, 2, 3, 'b' ]
console.log(res2);
console.log(arr);

// reduce
const res3 = arr.reduce((unique, item) => unique.includes(item) ? unique: [...unique, item], []); //  [ 'a', 1, 2, 3, 'b' ]›
console.log(res3);
console.log(arr);