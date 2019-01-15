/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    if (nums.length < 2) {
        return false;
    } else {
        const _arr = Array.from(new Set(nums));

        return _arr.length !== nums.length;

    }
}


const arr = [1, 2, 3, 1];

console.log(containsDuplicate(arr));
