/**
 * parseCookie
 * parseCookie('foo=bar; equation=E%3Dmc%5E2'); // { foo: 'bar', equation: 'E=mc^2' }
 * @author guobin201314@gmail.com on 2019-04-17
 */

export const parseCookie = (str: string) => {
  return str.split(';')
            .map((v) => v.split('='))
            .reduce(
                (acc: any, v) => {
                  acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
                  return acc;
                },
                {});
};

