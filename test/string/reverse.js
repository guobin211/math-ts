/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let n;
  if (x < 0) {
    const arr = String(x).split("").reverse()
    arr.pop();
    arr.unshift("-");
    n = Number(arr.join(""))
 
  } else {
    const s = String(x).split("").reverse().join("");
    n = Number(s);
  }
  if (n < -(Math.pow(2, 31))  || n > Math.pow(2, 31)) {
    return 0
  } else {
    return n;
  }
};

let num = 1534236469

reverse(num)

console.log(reverse(num))
