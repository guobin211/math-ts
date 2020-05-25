/**
 * 首字母大写
 * @param s
 */
export function capitalize(s: string) {
    let res: string = "";
    let arr: any = new Array(s);
    arr[0] = arr[0].toUpperCase();
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    arr = null;
    return res;
}
