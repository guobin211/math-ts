/**
 * 转义正则表达式
 * @param str
 */
export const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
