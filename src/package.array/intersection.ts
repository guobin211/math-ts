/**
 * 数组交集，返回两个数组中都存在的元素。
 * @param a
 * @param b
 */
export function intersection(a: Array<any>, b: Array<any>) {
    const s = new Set(b);
    return a.filter(x => s.has(x));
}
