/**
 * 获取数组中的每个第n个元素
 * @param arr
 * @param nth
 */
export function everyNth<T>(arr: Array<T>, nth: number) {
    return arr.filter((e, i) => i % nth === nth - 1);
}

