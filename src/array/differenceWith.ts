/**
 * 通过比较函数比较数组之间的差异
 * @param arr
 * @param val
 * @param comp
 */
export const differenceWith =
    (arr: Array<any>, val: Array<any>, comp: Function) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
