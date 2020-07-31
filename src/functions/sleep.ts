/**
 * 休眠，延迟执行异步函数
 * @param ms
 */
const sleep = (ms: number = 5) => new Promise(resolve => setTimeout(resolve, ms))

export default sleep
