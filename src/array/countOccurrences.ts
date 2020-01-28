/**
 * 计算数组中某个值出现的次数
 * @param arr
 * @param el
 */
export const countOccurrences = function (arr: Array<any>, el: any): number {
    return arr.reduce((a, v) => (v === el ? a + 1 : a + 0), 0);
}
