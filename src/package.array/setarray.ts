/**
 * 数组去重
 * @param arr
 */
export const setArray = (arr: Array<any>) => {
    const temp = [];
    const index = [];
    const l = arr.length;
    for (let i = 0; i < l; i++) {
        for (let j = i + 1; j < l; j++) {
            if (arr[i] === arr[j]) {
                i++;
                j = i;
            }
        }
        temp.push(arr[i]);
        index.push(i);
    }
    return temp;
};