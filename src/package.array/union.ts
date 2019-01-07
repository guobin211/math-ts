/**
 * 数组合集
 * @param a
 * @param b
 */
export function union(a: Array<any>, b: Array<any>) {
    return Array.from(new Set([...a, ...b]));
}
