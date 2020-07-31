/**
 * 计数排序不是基于比较的排序算法
 * 将输入的数据值转化为键存储在额外开辟的数组空间中
 * @param arr
 * @param maxValue
 *
 * 当输入的元素是 n 个 0到 k 之间的整数时，时间复杂度是O(n+k)，空间复杂度也是O(n+k)，其排序速度快于任何比较排序算法。
 * 当k不是很大并且序列比较集中时，计数排序是一个很有效的排序算法
 */
function countingSort(arr: Array<number>, maxValue: number) {
  const bucket = new Array(maxValue + 1),
    arrLen = arr.length,
    bucketLen = maxValue + 1
  let sortedIndex = 0

  for (let i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0
    }
    bucket[arr[i]]++
  }

  for (let j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j
      bucket[j]--
    }
  }

  return arr
}

export default countingSort
