/**
 * 删除数组中指定的值
 * @param arr
 * @param args
 *
 * @example
 *  let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
 *  pull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ]
 */
function pull(arr: Array<any>, ...args: any[]) {
  const argState = Array.isArray(args[0]) ? args[0] : args
  const pulled = arr.filter((v, _i) => !argState.includes(v))
  arr.length = 0
  pulled.forEach(v => arr.push(v))
}

export default pull
