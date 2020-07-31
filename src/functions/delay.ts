/**
 * 延迟调用函数
 * @param fn
 * @param t
 */
function delay(fn: Function, t: number) {
  return setTimeout(() => {
    fn()
  }, t)
}

export default delay
