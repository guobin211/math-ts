/**
 * 组合对象，创建一个新对象。
 * @param arr
 *
 * @example
 * const object = {
      a: [{ x: 2 }, { y: 4 }],
      b: 1
    };
     const other = {
      a: { z: 3 },
      b: [2, 3],
      c: 'foo'
    };
    merge(object, other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
 */
export function merge(arr: Object[]) {
    arr.reduce((acc, obj) =>
            Object.keys(obj).reduce((a, k) => {
                // @ts-ignore
                acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
                return acc;
            }, {}),
        {})
}
