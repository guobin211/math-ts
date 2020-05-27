/**
 * isWebUrl
 * 判断是否为URL地址
 * @author guobin201314@gmail.com on 2019-04-17
 */
export function isWebUrl(str: string): boolean {
    const reg = /^(https|http|ftp|rtsp|mms)?:\/\//;
    return reg.test(str);
}
