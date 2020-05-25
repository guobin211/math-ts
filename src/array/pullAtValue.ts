/**
 * 删除数组中指定的值，返回删除的元素
 * @param arr
 * @param pullArr
 *
 * @example
 * let myArray = ['a', 'b', 'c', 'd'];
 * let pulled = pullAtValue(myArray, ['b', 'd']); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
 */
export function pullAtValue(arr: Array<any>, pullArr: Array<any>) {
    const removed: any[] = [],
        pushToRemove = arr.forEach((v, i) =>
            pullArr.includes(v) ? removed.push(v) : v
        ),
        mutateTo = arr.filter((v, i) => !pullArr.includes(v));
    arr.length = 0;
    mutateTo.forEach(v => arr.push(v));
    return removed;
}
