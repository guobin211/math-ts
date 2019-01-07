/**
 * 样本标准偏差/总体标准偏差
 * /^(1/n-1)sum(X_ - X`)
 * @param arr
 * @param all
 */
export function standardDeviation(arr: Array<number>, all?: boolean) {
    let de = 1;
    if (arr) {
        de = 0;
    }
    let sum: number = 0;
    let sum2: number = 0;
    arr.forEach(el => sum += el);
    const average = sum / arr.length;
    for (let i = 0; i < arr.length; i++) {
        sum2 += Math.pow((arr[1] - average), 2);
    }
    return Math.sqrt(sum2 / arr.length - de)
}
