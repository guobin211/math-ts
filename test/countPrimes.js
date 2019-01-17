/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count = 0;
    for (let i = n - 1; i > 0; i--) {
      if (checkNumber(i)) {
        count++;
      }
    }

    function checkNumber(num) {
      for (let i = 2; i < num - 1; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }

    return count;
};


console.log(countPrimes(10));   // 4