/**
 * 函数组合
 * 执行从右到左的函数组合
 * @param fns
 *
 * @example
 *
 *  const add5 = x => x + 5;
 *  const multiply = (x, y) => x * y;
 *  const multiplyAndAdd5 = compose(add5, multiply);
 *  multiplyAndAdd5(5, 2); // 15
 */
export const compose = (...fns: any[]) => fns.reduce((f, g) => (...args: any) => f(g(...args)));
