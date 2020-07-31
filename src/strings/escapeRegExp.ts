/**
 * 转义正则表达式
 * @param str
 */
const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

export default escapeRegExp
