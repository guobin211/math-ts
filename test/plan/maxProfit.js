/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices == null || prices.length < 1) {
    return 0;
  }

  let max = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else {
      if (max < prices[i] - min) {
        max = prices[i] -min;
      }
    }
  }

  return max;
  
};

const arr = [7,6,4,3,1];

console.log(maxProfit(arr));