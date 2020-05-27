/**
 * 根据函数对数组进行分组, 返回分组的对象信息
 * @param arr
 * @param fn
 */
export const countBy = (arr: any, fn: any) =>
    arr
        .map(
            typeof fn === "function"
                ? fn
                : (val: { [x: string]: any }) => val[fn]
        )
        .reduce((acc: { [x: string]: any }, val: string | number, i: any) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, {});
