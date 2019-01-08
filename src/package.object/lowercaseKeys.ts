/**
 * 小写对象属性名
 * @param obj
 */
export function lowercaseKeys(obj: any) {
    Object.keys(obj).reduce((acc, key) => {
        // @ts-ignore
        acc[key.toLowerCase()] = obj[key];
        return acc;
    }, {});
}
