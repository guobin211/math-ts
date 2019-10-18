/**
 * 返回数组中元素所有的索引
 * @param arr
 * @param val
 */
export function indexOfAll(arr: Array<any>, val: any) {
    const indices: number[] = [];
    arr.forEach((el, i) => el === val && indices.push(i));
    return indices;
}
