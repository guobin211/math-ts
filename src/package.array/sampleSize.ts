/**
 * 从数组中随机获取 n 个元素
 * @param arr
 * @param n
 */
export function sampleSize([...arr], n: number = 1) {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr.slice(0, n);
}
