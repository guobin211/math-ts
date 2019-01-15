/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  // 去除头部空格
  str = str.replace(/^\s*/,"");
  // 匹配数字
  const reg = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // 匹配符号
  const mat = ['+', '-'];
  // 匹配结果
  const arr = [];
  if (mat.includes(str[0]) && reg.includes(str[1]) || reg.includes(str[0])) {
    if (mat.includes(str[0])) {
      arr.push(str[0]);
      for (let i = 1; i < str.length; i++) {
        const el = str[i];
        if (reg.includes(el)) {
          arr.push(el)
        } else {
          break;
        }
      }
    } else {
      for (let i = 0; i < str.length; i++) {
        const el = str[i];
        if (reg.includes(el)) {
          arr.push(el)
        } else {
          break;
        }
      }
    }
  
    if (Number(arr.join("")) < Math.pow(-2, 31)) {
      return Math.pow(-2, 31)
    }
    if (Number(arr.join("")) > Math.pow(2, 31) - 1) {
      return Math.pow(2, 31) - 1
    } else {
      return Number(arr.join(""));
    }

  } else {
    return 0;
  }
};

const str = "  +1 23";

console.log(myAtoi(str));
