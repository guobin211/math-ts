/**
 * 根据提供函数返回的值映射一个新对象
 * @param obj
 * @param fn
 *
 */
function mapValues(obj: { [key: string]: any }, fn: (a: any, b: any, c: any) => void) {
  Object.keys(obj).reduce((acc: any, k: any) => {
    acc[k] = fn(obj[k], k, obj)
    return acc
  }, {})
}

export default mapValues
