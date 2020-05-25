/**
 * 基数排序（Radix Sort）
 * @param arr
 * @param maxDigit
 *
 * 取得数组中的最大数，并取得位数,
 * 从最低位开始取每个位组成radix数组,
 * 对radix进行计数排序（利用计数排序适用于小范围数的特点)
 */
export function radixSort(arr: number[], maxDigit: number) {
    const counter = [];
    let mod = 10;
    let dev = 1;
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for (let j = 0; j < arr.length; j++) {
            // @ts-ignore
            // tslint:disable-next-line:radix
            const bucket = parseInt((arr[j] % mod) / dev);
            // tslint:disable-next-line:triple-equals
            if (counter[bucket] == null) {
                counter[bucket] = [];
            }
            // @ts-ignore
            counter[bucket].push(arr[j]);
        }
        let pos = 0;
        for (let j = 0; j < counter.length; j++) {
            let value = null;
            // tslint:disable-next-line:triple-equals
            if (counter[j] != null) {
                // tslint:disable-next-line:no-conditional-assignment triple-equals
                while ((value = counter[j].shift()) != null) {
                    arr[pos++] = value;
                }
            }
        }
    }
    return arr;
}
