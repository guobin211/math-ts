/**
 * 获取数组交集，返回存在于两个数组中的元素数组。
 * @param arr
 * @param values
 */
function similar(arr: Array<any>, values: Array<any>) {
  return arr.filter(v => values.includes(v))
}

export default similar
