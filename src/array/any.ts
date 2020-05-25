import { BoolFunction } from "./all";

/**
 * 检测是否有符合的元素
 * @param arr
 * @param fn
 */
// tslint:disable-next-line:variable-name
export const any = (arr: Array<any>, fn: BoolFunction): boolean => {
    return arr.some(fn);
};
