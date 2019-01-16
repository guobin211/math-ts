/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) {
    return [];
  }
  
  let res = [[1]];

  for (let i = 1; i < numRows; i++) {
    
    res[i] = [];

    for (let j = 0; j < i + 1; j++) {
      
      res[i][j] = (res[i - 1][j] || 0) + (res[i-1][j-1] || 0)
      
    }
    
  }

  return res;
};

// 帕斯卡三角

console.log(generate(5));