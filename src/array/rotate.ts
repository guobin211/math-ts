/**
 * rotate
 * @author guobin201314@gmail.com on 2019-01-16
 */

const rotate = function(nums: number[], k: number) {
  const size = nums.length
  for (let i = 0; i < k; i++) {
    const temp = nums[size - 1]
    for (let j = size - 1; j > 0; j--) {
      nums[j] = nums[j - 1]
    }
    nums[0] = temp
  }
}

export default rotate
