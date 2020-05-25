/**
 * 快速排序
 * @param arr
 * @param l
 * @param r
 */
export function quickSort(arr: Array<number>, l?: number, r?: number) {
    let len = arr.length,
        partitionIndex,
        left = typeof l != "number" ? 0 : l,
        right = typeof r != "number" ? len - 1 : r;
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;

    function partition(arr: Array<number>, left: number, right: number) {
        let pivot = left,
            index = pivot + 1;
        for (let i = index; i <= right; i++) {
            if (arr[i] < arr[pivot]) {
                swap(arr, i, index);
                index++;
            }
        }
        swap(arr, pivot, index - 1);
        return index - 1;
    }

    function swap(arr: Array<any>, i: number, j: number) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
