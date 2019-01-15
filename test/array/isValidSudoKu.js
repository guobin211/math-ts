/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

  for (let i = 0; i < 9; i++) {
    const nums = board[i].filter(item => item > 0)
    /**
     * 检查每一行
     */
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          return false;
        }
      }
    }
    /**
     * 9宫格
     */
    const checks = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ];
    const _col = [];
    for (let j = 0; j < 9; j++) {
      _col.push(board[j][i]);
      
    }

    console.log(checks);
    const check = checks[i].filter(item => item > 0);

    for (let i = 0; i < check.length - 1; i++) {
      for (let j = i + 1; j < check.length; j++) {
        if (check[i] === check[j]) {
          return false;
        }
      }
    }

    const col = _col.filter(item => item > 0);
    /**
     * 检查每一列
     */
    for (let i = 0; i < col.length - 1; i++) {
      for (let j = i + 1; j < col.length; j++) {
        if (col[i] === col[j]) {
          return false;
        }
      }
    }
  }

  return true;
};


const arr1 = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."]
];

const res1 = isValidSudoku(arr1);

console.log('arr1' + res1);
