/**
 * 堆排序（Heap Sort）
 * @param arr
 * 堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点
 */
function heapSort(arr: Array<number>) {
  let len: number = arr.length

  buildMaxHeap(arr)

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i)
    len--
    heaping(arr, 0)
  }
  return arr

  /**
   * 建立大顶堆
   * @param arr1
   */
  function buildMaxHeap(arr1: Array<number>) {
    for (let i = Math.floor(len / 2); i >= 0; i--) {
      heaping(arr1, i)
    }
  }

  /**
   * 堆调整
   * @param _arr1
   * @param i
   */
  function heaping(_arr1: Array<number>, i: number) {
    const left = 2 * i + 1,
      right = 2 * i + 2
    let largest = i

    if (left < len && arr[left] > arr[largest]) {
      largest = left
    }

    if (right < len && arr[right] > arr[largest]) {
      largest = right
    }

    if (largest !== i) {
      swap(arr, i, largest)
      heaping(arr, largest)
    }
  }

  function swap(arr1: Array<number>, i: number, j: number) {
    const temp = arr1[i]
    arr1[i] = arr1[j]
    arr1[j] = temp
  }
}

export default heapSort
