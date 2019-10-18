/**
 * 从 JSON 对象删除除了指定属性之外的任何其他属性
 * @param obj
 * @param keysToKeep
 * @param childIndicator
 */
export function deleteKey(obj: any, keysToKeep: string[], childIndicator: string) {
    Object.keys(obj).forEach(key => {
        if (key === childIndicator) {
            deleteKey(obj[key], keysToKeep, childIndicator);
        } else if (!keysToKeep.includes(key)) {
            delete obj[key];
        }
    });
    return obj;
}
