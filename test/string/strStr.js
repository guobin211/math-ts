/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") {
      return 0;
    }

    if (needle.length > haystack.length) {
      return -1;
    }

    const len = needle.length;

    for (let i = 0; i < haystack.length; i++) {
      const match = haystack.slice(i, i + len);
      if (match === needle) {
        return i
      }
    }
    return -1;
};

const haystack = "hello", needle = "ll";

console.log(strStr(haystack, needle));