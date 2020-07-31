/**
 * 转换驼峰字符串
 * @param str
 * @param separator
 */
const fromCamelCase = (str: string, separator = "_") =>
  str
    .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
    .toLowerCase()

export default fromCamelCase
