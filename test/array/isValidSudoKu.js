/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
//   检查每一行
  for (let arr of board) {            
    let row = []
    for (let c of arr) {
      if (c !== '.') row.push(c);
    }
    let set = new Set(row)
    if (set.size !== row.length) return false;
  }
  
//   检查每一列
  for (let i = 0; i < 9; i++) {
    let col = []
    board.map( arr => {
      if (arr[i] !== '.') col.push(arr[i])
    })
    let set = new Set(col)
    if (set.size !== col.length) return false;
  }
  
//   检查每个小方块
  for (let x = 0; x < 9; x += 3) {
    for (let y = 0; y < 9; y += 3) {
      let box = []
      for (let a = x; a < 3 + x; a ++) {
        for (let b = y; b < 3 + y; b ++) {
          if (board[a][b] !== '.') box.push(board[a][b])
        }
      }
      let set = new Set(box)
      if (set.size !== box.length) return false
    }
  }
  
  return true
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
