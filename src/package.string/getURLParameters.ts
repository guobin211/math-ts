/**
 * 当前URL参数的对象
 * @param url
 */
export const getURLParams = (url: string) => {
    // @ts-ignore
    return url
        .match(/([^?=&]+)(=([^&]*))/g)
        // @ts-ignore
        .reduce((a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {});
}


