/**
 * 根据提供函数返回的值映射一个新对象
 * @param obj
 * @param fn
 *
 * @example
 * const users = {
      fred: { user: 'fred', age: 40 },
      pebbles: { user: 'pebbles', age: 1 }
    };
    mapValues(users, u => u.age); // { fred: 40, pebbles: 1 }
 *
 */
export function mapValues(obj: any, fn: Function) {
    Object.keys(obj).reduce((acc, k) => {
        // @ts-ignore
        acc[k] = fn(obj[k], k, obj);
        return acc;
    }, {});
}
