/**
 * 是否为类数组
 * 检查提供的参数是否可迭代
 * @param val
 */
export const isArrayLike = (val: any) => {
    try {
        // @ts-ignore
        return [...val];
    } catch (e) {
        return false;
    }
};
