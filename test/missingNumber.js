/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort();
    let res = nums.length;
    for (let i = 0; i < nums.length; i++) {
        res += (i - nums[i]);
    }
    return res;
};

const arr = [9,6,4,2,3,5,7,0,1];

console.log(missingNumber(arr));