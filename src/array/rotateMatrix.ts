/**
 * 给定一个 n × n 的二维矩阵表示一个图像
 * 一层一层旋转
 * 旋转次数与数组层数相关
 *
 * rotateDeepArray
 * @author guobin201314@gmail.com on 2019-01-16
 */

const rotateMatrix = function(matrix: any) {
  if (matrix.length !== matrix[0].length) {
    throw new Error("not a matrix (n x n) array")
  }
  const size = matrix.length
  const times = Math.floor(size / 2)

  for (let i = 0; i < times; i++) {
    for (let j = 0; j < size / 2; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[size - 1 - j][i]
      matrix[size - 1 - j][i] = matrix[size - 1 - i][size - 1 - j]
      matrix[size - 1 - i][size - 1 - j] = matrix[j][size - 1 - i]
      matrix[j][size - 1 - i] = temp
    }
  }
}

export default rotateMatrix
