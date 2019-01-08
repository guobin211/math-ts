/**
 * 解析所有 cookie 的 name-value 对的对象
 * @param str
 *
 * @example
 * parseCookie('foo=bar; equation=E%3Dmc%5E2'); // { foo: 'bar', equation: 'E=mc^2' }
 */
export const parseCookie = (str: string) =>
    str
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, v) => {
            // @ts-ignore
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
            return acc;
        }, {});
