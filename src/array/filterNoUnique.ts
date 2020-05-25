/**
 * 过滤掉数组中的非唯一值
 * @param arr
 */
export function filterNoUnique(arr: Array<any>) {
    return arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
}
