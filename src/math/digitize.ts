/**
 * 将数字转化为整数数组
 * @param n
 */
export const digitize = (n: any) => [...`${n}`].map(i => parseInt(i, 10));
