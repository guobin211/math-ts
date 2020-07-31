/**
 * 大写每个单词的首字母
 * @param str
 */
function capitalizeEveryWord(str: string) {
  return str.replace(/\b[a-z]/g, char => char.toUpperCase())
}

export default capitalizeEveryWord
