/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] + nums[j]) === target) {
        res = [i, j];
        break;
      }
    }
  }
  return res.sort((a, b) => a - b);
};


const arr = [2, 7, 11, 15];

console.log(twoSum(arr, 9));