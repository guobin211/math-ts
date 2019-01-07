/**
 * 获取数组中的每个第n个元素
 * @param arr
 * @param nth
 */
function everyNth<T>(arr: Array<T>, nth: number) {
    return arr.filter((e, i) => i % nth === nth - 1);
}

export default everyNth;
