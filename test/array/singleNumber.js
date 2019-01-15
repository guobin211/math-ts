/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    let temp = 0;
    for (let j = 0; j < nums.length; j++) {
      if (el === nums[j]) {
        temp++;
      }
    }
    if (temp < 2) {
      return el;
    }
  }
};

const arr = [2,2,1];

console.log(singleNumber(arr))