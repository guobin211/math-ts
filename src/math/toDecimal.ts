/**
 * toDecimal
 * 保留n位小数
 * @author guobin201314@gmail.com on 2019-04-17
 */

export function toDecimal(data: number | string, num: number): number {
    if (typeof data === "string") {
        return parseFloat(parseFloat(<string>data).toFixed(num));
    } else {
        return parseFloat((<number>data).toFixed(num));
    }
}
