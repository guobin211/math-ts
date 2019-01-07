/**
 * 所有元素都执行函数检测
 * @param arr
 * @param fn
 */
export const all = (arr: Array<any>, fn: BoolFunction): boolean => {
    return arr.every(fn);
}

export interface BoolFunction {
    (el: any): boolean
}
