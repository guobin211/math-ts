/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  let temp = 0;
  for (let i = 0; i < prices.length; i++) {
    temp = prices[i];
    if (prices[i+1] > prices[i]) {
      res += prices[i+1] - temp;
    }
  }
  return res;
};


const arr = [7, 6, 2, 4, 1];

const res = maxProfit(arr);

console.log(res);