/**
 * 希尔排序
 * O(N^1.3)
 * O(1)
 * @param arr T[]
 */
function shellSort<T>(arr: T[]) {
  const len = arr.length
  let temp
  let gap = 1
  while (gap < len / 3) {
    gap = gap * 3 + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      temp = arr[i]
      let j
      for (j = i - gap; j > 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
}

export default shellSort
