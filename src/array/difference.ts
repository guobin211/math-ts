/**
 * 数组比较差异
 * @param a
 * @param b
 */
export const difference = (a: Array<any>, b: Array<any>) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
};
