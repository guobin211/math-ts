/**
 * 平铺数组
 * @param arr
 */
const deepFlatten = (arr: Array<any>): Array<any> => {
  return [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))
}

export default deepFlatten
