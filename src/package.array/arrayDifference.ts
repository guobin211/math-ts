/**
 * 获取数组差集
 * @param a
 * @param b
 *
 * @example
 * arrayDifference([1, 2, 3], [1, 2, 4]); // [3,4]
 */
export function arrayDifference(a: Array<any>, b: Array<any>) {
    const sA = new Set(a),
        sB = new Set(b);
    return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
}
