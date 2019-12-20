/**
 * maxProfit
 * @author guobin201314@gmail.com on 2019-01-16
 */

export const maxProfit = function(prices: number[]) {
    let res = 0;
    let temp = 0;
    for (let i = 0; i < prices.length; i++) {
        temp = prices[i];
        if (prices[i + 1] > prices[i]) {
            res += prices[i + 1] - temp;
        }
    }
    return res;
};

