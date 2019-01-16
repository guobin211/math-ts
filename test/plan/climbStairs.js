/**
 * 
 * 
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 0 || n === 1 || n ===2) {
    return n;
  }

  // return climbStairs(n-1) + climbStairs(n-2);
  let a = 1, b = 2;

    let temp = a + b;

    for (let i = 3; i <= n; i++) {

        temp = a + b;

        a = b;

        b = temp; 

    }

    return temp; 

};


console.log(climbStairs(2));