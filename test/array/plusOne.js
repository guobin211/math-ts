/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const res = [];
  let temp = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const el = digits[i];
    if (el + temp > 9) {
      res.unshift(0);
      temp = 1;
    } else {
      const num = el + temp;
      res.unshift(num);
      temp = 0;
    }
  }
  if (temp === 1) {
    res.unshift(1);
  }

  return res;
};

const arr1 = [8, 9, 9 ];

const arr2 = [9];

console.log(plusOne(arr2));