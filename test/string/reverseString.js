
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s.split("").reverse().join("");
};

let str = "A man, a plan, a canal: Panama";

reverseString(str);

console.log(str);

console.log(reverseString(str));