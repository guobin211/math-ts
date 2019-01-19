const arr = ['a', 1, 2, 'a', 3, 2, 'b'];

const setArr = new Set(arr);

const res = Array.from(setArr);  // [ 'a', 1, 2, 3, 'b' ]

console.log(res); 