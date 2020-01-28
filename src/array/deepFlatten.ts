/**
 * 平铺数组
 * @param arr
 */
export const deepFlatten = (arr: Array<any>): Array<any> => {
    return [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))
};
