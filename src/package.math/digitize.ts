/**
 * 将数字转化为整数数组
 * @param n
 */
// @ts-ignore
export const digitize = n => [...`${n}`].map(i => parseInt(i));
