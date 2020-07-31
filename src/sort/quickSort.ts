/**
 * 快速排序
 * @param arr T[]
 * @param l
 * @param r
 */
function quickSort<T>(arr: T[], l?: number, r?: number): T[] {
  const len = arr.length,
    left = typeof l !== "number" ? 0 : l,
    right = typeof r !== "number" ? len - 1 : r
  let partitionIndex
  if (left < right) {
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
  /**
   * 分区操作
   * 从数列中挑出一个元素，称为 “基准”（pivot）
   * 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置
   * @param arr1 T[]
   * @param left1 index number
   * @param right1 index number
   */
  function partition(arr1: T[], left1: number, right1: number) {
    const pivot = left1
    let index = pivot + 1
    for (let i = index; i <= right1; i++) {
      if (arr1[i] < arr1[pivot]) {
        swap(arr1, i, index)
        index++
      }
    }
    swap(arr1, pivot, index - 1)
    return index - 1
  }

  function swap(arr1: Array<any>, i: number, j: number) {
    const temp = arr1[i]
    arr1[i] = arr[j]
    arr1[j] = temp
  }
}

export default quickSort
