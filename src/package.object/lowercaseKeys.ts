/**
 * 小写对象属性名
 * @param obj
 */
export function lowercaseKeys(obj: any) {
    Object.keys(obj).reduce((acc, key) => {
        (acc as any)[key.toLowerCase()] = obj[key];
        return acc;
    }, {});
}
