/**
 * 将数组的所有元素拼接成一个字符串
 * @param arr
 * @param separator 链接符
 * @param end 最后一组链接符
 */
export function join(
    arr: Array<string>,
    separator: string = ",",
    end?: string
) {
    if (!end) {
        end = separator;
    }
    return arr.reduce(
        (acc, val, i) =>
            i === arr.length - 2
                ? acc + val + end
                : i === arr.length - 1
                ? acc + val
                : acc + val + separator,
        ""
    );
}
