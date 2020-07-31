/**
 * 求数字或数组的平均值
 * @param nums
 */
const average = (...nums: any[]) => [...nums].reduce((acc, val) => acc + val, 0) / nums.length

export default average
