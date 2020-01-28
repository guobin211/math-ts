/**
 * 从对象中提取出与给定键对应的键值对。
 * @param obj
 * @param arr
 *
 * @example
 * pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
 */
export function pick(obj: Object, arr: Array<any>) {
    // @ts-ignore
    // tslint:disable-next-line:ban-comma-operator
    return arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
}
