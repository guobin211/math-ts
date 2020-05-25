/**
 * 将 cookie name: value 对序列化为 Set-Cookie 头字符串
 * @param name
 * @param val
 */
export const serializeCookie = (name: string, val: string) =>
    `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
