/**
 * 数组随机取样本
 * @param arr
 */
export function sample(arr: Array<any>) {
    return arr[Math.floor(Math.random() * arr.length)];
}
