/**
 * 删除数组中指定的值，返回删除的元素
 * @param arr
 * @param pullArr
 *
 * @example
 * let myArray = ['a', 'b', 'c', 'd'];
 * let pulled = pullAtValue(myArray, ['b', 'd']); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
 */
function pullAtValue(arr: Array<any>, pullArr: Array<any>) {
  arr.forEach((v, _i) => (pullArr.includes(v) ? removed.push(v) : v))
  const removed: any[] = [],
    mutateTo = arr.filter((v, _i) => !pullArr.includes(v))
  arr.length = 0
  mutateTo.forEach(v => arr.push(v))
  return removed
}

export default pullAtValue
