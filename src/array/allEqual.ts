/**
 * 数组内元素相同
 * @param arr
 */
export const allEqual = (arr: any[]): boolean => {
    return arr.every((val) => val === arr[0]);
};

