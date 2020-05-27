import { BoolFunction } from "./all";

/**
 * 检测是否有符合的元素
 * @param arr
 * @param fn Function
 */
export const anyFn = (arr: Array<any>, fn: BoolFunction): boolean => {
    return arr.some(fn);
};
