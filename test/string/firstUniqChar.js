/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const after = s.replace(current, '');
    if (!after.includes(current)) {
      return i;
    }
  }
  return -1;
};


const s = "eeecode";

console.log(firstUniqChar(s))