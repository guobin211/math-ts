/**
 * rows转csv
 * 二维table数组转csv字符串
 * @param arr
 * @param delimiter
 */
export const arrayToCSV = (arr: Array<any>, delimiter = ',') => {
    return arr.map(v => v.map((x: any) => `"${x}"`).join(delimiter)).join('\n');
}
