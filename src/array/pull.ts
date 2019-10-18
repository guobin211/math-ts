/**
 * 删除数组中指定的值
 * @param arr
 * @param args
 *
 * @example
 *  let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
 *  pull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ]
 */
export function pull(arr: Array<any>, ...args: any[]) {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    let pulled = arr.filter((v, i) => !argState.includes(v));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
}
