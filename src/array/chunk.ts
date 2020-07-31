/**
 * 数组分包
 * @param arr array
 * @param size length
 */
const chunk = (arr: Array<any>, size: number): Array<any> => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) =>
    arr.slice(i * size, i * size + size)
  )
}

export default chunk
