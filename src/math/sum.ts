/**
 * 数组求和
 * @param arr
 */
export const sum = (arr: Array<number>) =>
    [...arr].reduce((acc, val) => acc + val, 0);
