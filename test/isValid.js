/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) {
      return false;
    }
    let stack = [];
    let left = ['(', '{', '['];
    let right = [')', '}', ']'];

    for (let i = 0; i < s.length; i++) {
      const index = left.indexOf(s[i]);
      if (index !== -1) {
        stack.push(left[index]);
      } else {
        let l = left.indexOf(stack[stack.length - 1]);
        let r = right.indexOf(s[i]);
        if (l === r) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.length === 0;
};

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

const str = '{}[]()';

console.log(isValid(str));