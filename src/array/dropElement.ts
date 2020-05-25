/**
 * 删除数组中的元素，返回剩下的元素
 * @param arr
 * @param func
 */
export function dropElement<T>(arr: Array<T>, func: Function): Array<T> {
    while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
    return arr;
}
