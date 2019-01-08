/**
 * 堆排序（Heap Sort）
 * @param arr
 * 堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点
 */
export function heapSort(arr: Array<number>) {
    let len: number = arr.length;

    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heaping(arr, 0);
    }
    return arr;

    /**
     * 建立大顶堆
     * @param arr
     */
    function buildMaxHeap(arr: Array<number>) {
        for (let i = Math.floor(len / 2); i >= 0; i--) {
            heaping(arr, i);
        }
    }

    /**
     * 堆调整
     * @param arr
     * @param i
     */
    function heaping(arr: Array<number>, i: number) {
        let left = 2 * i + 1,
            right = 2 * i + 2,
            largest = i;

        if (left < len && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < len && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest != i) {
            swap(arr, i, largest);
            heaping(arr, largest);
        }
    }

    function swap(arr: Array<number>, i: number, j: number) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
