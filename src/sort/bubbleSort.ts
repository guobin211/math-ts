/**
 * 冒泡排序
 * 时间复杂度 O(N^2)
 * 空间复杂度 O(1)
 * @param arr T[]
 */
function bubbleSort<T>(arr: T[]) {
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
}

export default bubbleSort
