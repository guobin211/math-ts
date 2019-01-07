/**
 * 求start 到 end 的 power 幂累加
 * @param start
 * @param end
 * @param power
 */
export function sumPower(start: number, end: number, power: number) {
    return Array(end + 1 - start)
        .fill(0)
        .map((x, i) => (i + start) ** power)
        .reduce((a, b) => a + b, 0);
}
