/**
 * 链式调用异步函数
 * @param fns
 */
export const chainAsync = (fns: Array<Function>) => {
    let curr = 0;
    const next = () => fns[curr++](next);
    next();
}
