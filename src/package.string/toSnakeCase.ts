/**
 * 转化为下划线拼接格式
 * @param str
 */
export const toSnakeCase = (str: string) => {
    str &&
    // @ts-ignore
    str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_');
};
