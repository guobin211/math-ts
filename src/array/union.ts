/**
 * 数组合集
 * @param a
 * @param b
 */
function union(a: Array<any>, b: Array<any>) {
  return Array.from(new Set([...a, ...b]))
}

export default union
