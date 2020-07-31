/**
 * 插入排序
 * O(N^2)
 * O(1)
 * @param arr T[]
 */
function insertionSort<T>(arr: T[]) {
  const len = arr.length
  let preIndex, current
  for (let i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
}

export default insertionSort
