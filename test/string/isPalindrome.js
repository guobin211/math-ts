/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const current = s.replace(/\s|\xA0/g, "").toLowerCase().replace(/[&\|\\\*^%$#@\-,.。;!\(\)\{\}`:"'?~]/g, "").split("").reverse().join("");
  const compare = s.replace(/\s|\xA0/g, "").toLowerCase().replace(/[&\|\\\*^%$#@\-,.。;!\(\)\{\}`:"'?~]/g, "");
  return (current === compare);
};

const a = "I, man, am regal; a German am I.";

console.log(isPalindrome(a));

