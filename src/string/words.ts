/**
 * 将字符串转换为单词数组
 * @param str
 * @param pattern
 */
export const words = (str: string, pattern = /[^a-zA-Z-]+/) =>
    str.split(pattern).filter(Boolean);
