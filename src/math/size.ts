/**
 * 获取数组，对象或字符串的大小
 * @param val
 */
export function size(val: any) {
    Array.isArray(val)
        ? val.length
        : val && typeof val === "object"
        ? val.size || val.length || Object.keys(val).length
        : typeof val === "string"
        ? new Blob([val]).size
        : 0;
}
