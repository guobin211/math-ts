/**
 * singleNumber
 * @author guobin201314@gmail.com on 2019-01-16
 */

export const singleNumber = function(nums: number[]) {
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
