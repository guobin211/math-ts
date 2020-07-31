/**
 * 是否为绝对地址
 * @param str
 */
const isAbsoluteURL = (str: string) => /^[a-z][a-z0-9+.-]*:/.test(str)

export default isAbsoluteURL
