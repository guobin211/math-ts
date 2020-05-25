/**
 * 计算元素出现的次数
 * @param arr
 * @param val
 */
export const occurrence = (arr: Array<any>, val: any) => {
    arr.reduce((a, v) => {
        return v === val ? a + 1 : a + 0;
    }, 0);
};
