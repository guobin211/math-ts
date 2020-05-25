/**
 * 获取原生类型的值
 * @param v
 */
export const getType = (v: any) =>
    v === undefined
        ? "undefined"
        : v === null
        ? "null"
        : v.constructor.name.toLowerCase();
