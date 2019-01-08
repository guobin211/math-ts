/**
 * 计算一个函数执行的时间
 * @param callback
 */
export const takeTime = (callback: Function) => {
    console.time('timeTaken');
    const r = callback();
    console.timeEnd('timeTaken');
    return r;
};
