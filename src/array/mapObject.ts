/**
 * 将数组的值映射到对象
 * @param arr
 * @param fn
 *
 * @example:
 *   const squareIt = arr => mapObject(arr, a => a * a);
 *   squareIt([1, 2, 3]); // { 1: 1, 2: 4, 3: 9 }
 */
export function mapObject(arr: Array<any>, fn: any) {
    (a => (
        // @ts-ignore
        // tslint:disable-next-line:ban-comma-operator
        (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
    ))();
}
