/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  if (nums.length === 0) {
    return 0;
  }
    
  let sum = nums[0];
  let n = 0;

  for (let i = 0; i < nums.length; i++) {
    /**
     * 当前
     */
    if (n > 0) {
      n += nums[i];
    } else {
      n = nums[i];
    }
    /**
     * 累计
     */
    if (sum < n) {
      sum = n;
    }
  }

  return sum;

};

const arr = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(arr));

