/**
 * 根据函数对数组进行分组, 返回分组的对象信息
 * @param arr
 * @param fn
 */
export const countBy = (arr: any, fn: any) =>
    // @ts-ignore
    arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
