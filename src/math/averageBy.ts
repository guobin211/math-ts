/**
 * 根据函数映射每个元素，然后求数组的平均值
 * @param arr
 * @param fn
 */
export const averageBy = (arr: { map: (arg0: any) => { reduce: (arg0: (acc: any, val: any) => any, arg1: number) => number; }; length: number; }, fn: string | number) =>
    arr.map(typeof fn === 'function' ? fn : (val: { [x: string]: any; }) => val[fn]).reduce((acc, val) => acc + val, 0) /
    arr.length;
