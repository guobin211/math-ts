/**
 * 反转对象的键值对
 * @param obj
 */
export function invertKeyValues(obj: any) {
    let resObject: any = {};
    Object.keys(obj).forEach(el => {
        resObject[obj[el]] = el;
    });
    return resObject;
}
