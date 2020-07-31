/**
 * 从后往前便利数组
 * @param arr
 * @param callback
 */
function forEachRight(arr: Array<any>, callback: any) {
  return arr
    .slice(0)
    .reverse()
    .forEach(callback)
}

export default forEachRight
