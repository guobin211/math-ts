/**
 * 计算一个数字的阶乘
 * @param n
 */
export const factorial = (n: number) => {
    if (n < 0) {
        throw new TypeError('Negative numbers are not allowed!');
    }
    if (n === 1) {
        return 1;
    } else {
        let res: number = 0;
        while (n > 1) {
            res += n * (n - 1)
            n--;
        }
    }
}
