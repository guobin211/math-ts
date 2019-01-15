/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length < 2) {
    return;
  }

  let count = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    const el = nums[i];
    if (el === 0) {
      nums.splice(i, 1);
      count++;
    }
  }

  for (let j = 0; j < count; j++) {
    nums.push(0)
  }
};

const arr = [0,2, 1,0,0];

moveZeroes(arr);

console.log(arr);