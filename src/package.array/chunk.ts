/**
 * 数组分包
 * @param arr array
 * @param size length
 */
export const chunk = (arr: Array<any>, size: number): Array<any> => {
    return Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
        arr.slice(i * size, i * size + size)
    )
};