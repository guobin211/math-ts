/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  
    if (nums.length === 0) {
      return 0;
    }

    if (nums.length === 1) {
      return nums[0];
    }

    // 存储i个元素的最大值序列
    let max = [nums[0]];

    max.push(Math.max(nums[0], nums[1]));

    for (let i = 2; i < nums.length; i++) {
      if (max[i - 2] + nums[i] > max[i-1]) {
        max[i] = max[i-2] + nums[i];
      } else {
        max[i] = max[i-1];
      }
    }

    return max[max.length -1];


};

// 输入: [1,2,3,1]
// 输出: 4
// 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。
// 输入: [2,7,9,3,1]
// 输出: 12
// 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12 。


console.log(rob([1,2,3,4,5]));