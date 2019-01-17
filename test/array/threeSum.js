/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] === -nums[k]) {
          const temp = [nums[i], nums[j], nums[k]];

          if (check(res, temp)) {
            res.push(temp)
          }
         
        }
      }
    }
  }

  function  check(res, temp) {
    for (let m = 0; m < res.length; m++) {
      const element = res[m];
      if (element[0] === temp[0] && element[1] === temp[1]) {
        return false;
      }
    }
    return true;
  }

  return res;
};

// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

const arr = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(arr));
