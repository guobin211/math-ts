/**
 * 柯里化一个函数
 * @param fn
 * @param arity
 * @param args
 */
// @ts-ignore
const curry = (fn, arity = fn.length, ...args) => {
    return arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
};
