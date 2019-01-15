/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const size = nums.length;
  for (let i = 0; i < k; i++) {
    const temp = nums[size - 1];
    for (let j = size - 1; j > 0; j--) {
      nums[j] = nums[j-1];
    }
    nums[0] = temp;
  }
};

const arr = [1,2,3,4];

rotate(arr, 2);

console.log(arr);