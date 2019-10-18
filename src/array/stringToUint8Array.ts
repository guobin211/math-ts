/**
 * stringToUint8Array
 * @author guobin201314@gmail.com on 2019-04-17
 */
export function stringToUint8Array(str: string): Uint8Array {
    const arr = [];
    for (let i = 0, j = str.length; i < j; ++i) {
        arr.push(str.charCodeAt(i));
    }
    return new Uint8Array(arr);
}
