/**
 * 是否为排序数组
 * 升序数组 1
 * 降序数组 -1
 * 未排序   0
 * @param arr
 * @return number
 */
export function isSorted(arr: Array<any>) {
    const direction = arr[0] > arr[1] ? -1 : 1;
    // @ts-ignore
    for (let [i, val] of arr.entries())
        if (i === arr.length - 1) return direction;
        else if ((val - arr[i + 1]) * direction > 0) return 0;
}
