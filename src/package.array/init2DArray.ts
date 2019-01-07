/**
 * 初始化一个二维数组
 * @param w 数组长度
 * @param h 数组行数
 * @param val 数组默认值
 */
export function init2DArray(w: number, h: number, val: any = null) {
    return Array.from({length: h}).map(() => Array.from({length: w}).fill(val));
}
