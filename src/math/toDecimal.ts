/**
 * toDecimal
 * 保留n位小数
 * @author guobin201314@gmail.com on 2019-04-17
 */

export function toDecimal(data: number | string, num: number): number {
    if (typeof data === "string") {
        return parseFloat(parseFloat(data as string).toFixed(num));
    } else {
        return parseFloat((data as number).toFixed(num));
    }
}
