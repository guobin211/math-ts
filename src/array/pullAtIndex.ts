/**
 * 删除数组中指定索引的值
 * @param arr
 * @param pullArr
 *
 * @example
 * let myArray = ['a', 'b', 'c', 'd'];
 * let pulled = pullAtIndex(myArray, [1, 3]); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
 */
export function pullAtIndex(arr: Array<any>, pullArr: Array<any>) {
    const removed: any[] = [];
    const pulled = arr
        .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
        .filter((v, i) => !pullArr.includes(i));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return removed;
}
