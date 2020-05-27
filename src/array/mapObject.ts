/**
 * 将数组的值映射到对象
 * @param fn
 *
 * @example:
 *   const squareIt = mapObject( a => a * a);
 *   squareIt([1, 2, 3]); // { 1: 1, 2: 4, 3: 9 }
 */
export function mapObject(fn: any) {
    return function(arr: any[]) {
        const obj: any = Object.create(null);
        for (const el of arr) {
            obj[el] = fn(el);
        }
        return obj;
    };
}
