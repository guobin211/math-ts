/**
 * 过滤假值元素(false, null, 0, "", undefined, 和 NaN)
 * @param arr
 */
const compact = (arr: Array<any>): Array<any> => arr.filter(Boolean)

export default compact
