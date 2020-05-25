/**
 * 数组分组
 * @param arr
 * @param fn
 */
export function groupBy(arr: Array<any>, fn: Function) {
    // @ts-ignore
    return arr
        .map(typeof fn === "function" ? fn : val => val[fn])
        .reduce((acc, val, i) => {
            acc[val] = (acc[val] || []).concat(arr[i]);
            return acc;
        }, {});
}
