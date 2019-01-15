/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
      return false;
    }
    let compare = t;
    for (let i = 0; i < s.length; i++) {
      const current = s[i];
      if (compare.indexOf(current) === -1) {
        return false;
      } else {
        compare = compare.replace(current, '');
      }
    }
    return true;
};

const s = "aacc", t = "ccac";

console.log(isAnagram(s, t));

