// // 以数字集合 1, 2 和 3 初始化数组。
// int[] nums = {1,2,3};
// Solution solution = new Solution(nums);

// // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
// solution.shuffle();

// // 重设数组到它的初始状态[1,2,3]。
// solution.reset();

// // 随机返回数组[1,2,3]打乱后的结果。
// solution.shuffle();


/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = Array.prototype.slice.call(nums);
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let temp = this.nums;
  let j, x, i;

  for (i = this.nums.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i -1))
    x = temp[i];
    temp[i] = temp[j];
    temp[j] = x;
  }

  return temp;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

const obj = new Solution([1, 2, 3, 4]);
console.log(obj.reset());