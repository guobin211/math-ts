/**
 * 休眠，延迟执行异步函数
 * @param ms
 */
export const sleep = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));
