/**
 * 根据提供函数返回的值映射一个新对象
 * @param obj
 * @param fn
 *
 */
export function mapValues(obj: { [key: string]: any }, fn: () => void) {
    Object.keys(obj).reduce((acc, k) => {
        // @ts-ignore
        acc[k] = fn(obj[k], k, obj);
        return acc;
    }, {});
}
