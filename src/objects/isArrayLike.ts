/**
 * 是否为类数组
 * 检查提供的参数是否可迭代
 * @param val
 */
const isArrayLike = (val: any) => {
  try {
    return [...val]
  } catch (e) {
    return false
  }
}

export default isArrayLike
