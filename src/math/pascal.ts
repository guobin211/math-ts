/**
 * pascal
 * @author guobin201314@gmail.com on 2019-01-16
 */

const pascal = (numRows: number): any => {
  if (numRows === 0) {
    return []
  }

  const res = [[1]]

  for (let i = 1; i < numRows; i++) {
    res[i] = []

    for (let j = 0; j < i + 1; j++) {
      res[i][j] = (res[i - 1][j] || 0) + (res[i - 1][j - 1] || 0)
    }
  }

  return res
}

export default pascal
