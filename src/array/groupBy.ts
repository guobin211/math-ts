/**
 * 数组分组
 * @param arr
 * @param fn
 */
function groupBy(arr: Array<any>, fn: Function) {
  return arr
    .map(el => fn(el))
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i])
      return acc
    }, {})
}

export default groupBy
