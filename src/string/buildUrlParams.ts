/**
 * 构造url查询参数
 * @param obj
 *
 * @example
 *  obj = {
 *      name: 'jack'
 *      age: 22,
 *  }
 *
 *  buildUrlParams(obj)  // '?name=jack&age=22'
 */
export const buildUrlParams = (obj: any) => {
    let res: string = "?";
    const arr = Object.keys(obj);
    arr.forEach(el => {
        res += `${el}=${obj[el]}&`;
    });
    return res.substr(0, res.length - 1);
};
