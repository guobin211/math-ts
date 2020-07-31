/**
 * 归并排序
 * @param arr
 */
function mergeSort<T>(arr: T[]): T[] {
  const len = arr.length
  if (len < 2) {
    return arr
  }
  const middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))

  function merge(left1: T[], right1: T[]): T[] {
    const result: T[] = []

    while (left1.length > 0 && right1.length > 0) {
      if (left1[0] <= right[0]) {
        const res = left1.shift()
        if (res) {
          result.push(res)
        }
      } else {
        const res = right1.shift()
        if (res) {
          result.push(res)
        }
      }
    }

    while (left1.length) {
      result.push(left1.shift()!)
    }

    while (right1.length) {
      result.push(right1.shift()!)
    }

    return result
  }
}

export default mergeSort
