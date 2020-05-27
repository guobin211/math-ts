/**
 * 快速排序
 * @param arr
 * @param l
 * @param r
 */
export function quickSort(arr: Array<number>, l?: number, r?: number) {
    const len = arr.length,
        left = typeof l !== "number" ? 0 : l,
        right = typeof r !== "number" ? len - 1 : r;
    let partitionIndex;
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;

    function partition(arr1: Array<number>, left1: number, right1: number) {
        const pivot = left1;
        let index = pivot + 1;
        for (let i = index; i <= right1; i++) {
            if (arr1[i] < arr1[pivot]) {
                swap(arr1, i, index);
                index++;
            }
        }
        swap(arr1, pivot, index - 1);
        return index - 1;
    }

    function swap(arr1: Array<any>, i: number, j: number) {
        const temp = arr1[i];
        arr1[i] = arr[j];
        arr1[j] = temp;
    }
}
