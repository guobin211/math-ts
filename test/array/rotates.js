/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let size = matrix.length;

  const times = Math.floor(size/2);
  // console.log(times);
  /**
   * 一层一层旋转
   * 旋转次数与数组层数相关
   */
  for (let i = 0; i < times; i++) {
    for (let j = 0; j < size / 2; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[size - 1 - j][i];
      matrix[size - 1 - j][i] = matrix[size - 1 - i][size - 1 - j];
      matrix[size - 1 - i][size - 1 - j] = matrix[j][size - 1 - i];
      matrix[j][size - 1 - i] = temp;
    }
  }
};

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const arr2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
];

rotate(arr);

console.log(arr);