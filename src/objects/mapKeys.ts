/**
 * 根据提供函数生成的键生成一个新对象
 * @param obj
 * @param fn
 *
 * @example
 * mapKeys({ a: 1, b: 2 }, (val, key) => key + val); // { a1: 1, b2: 2 }
 */
function mapKeys(obj: any, fn: ObjectFunction) {
  Object.keys(obj).reduce((acc, k) => {
    // @ts-ignore
    acc[fn(obj[k], k, obj)] = obj[k]
    return acc
  }, {})
}

type ObjectFunction = (key: string, val: any) => string

export default mapKeys
