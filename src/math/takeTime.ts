/**
 * 计算一个函数执行的时间
 * @param callback
 */
const takeTime = (callback: Function) => {
  console.time("timeTaken")
  const r = callback()
  console.timeEnd("timeTaken")
  return r
}

export default takeTime
