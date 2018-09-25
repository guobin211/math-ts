export class GArray {
  constructor() {}

  // ================== 1.改变原数组 ==================== //
  // ================== 1.改变原数组 ==================== //
  /**
   * 改变原始数组，过滤掉指定的值。
   * @param arr
   * @param args
   */
      // @ts-ignore
  static pull = (arr: Array<any>, ...args) => {
    const argState = Array.isArray(args[0]) ? args[0] : args;
    const pulled = arr.filter((v, i) => !argState.includes(v));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
  }


  // =================== 2.有返回值 =================== //
  // =================== 2.有返回值 =================== //
  /**
   * 数组过滤假值元素(false, null, 0, "", undefined, 和 NaN)。
   * @param arr
   */
  static compact = (arr: Array<any>): Array<any> => arr.filter(Boolean);

  /**
   * 数组分组 根据给定的函数对数组元素进行分组。
   * @param arr
   * @param fn
   */
   static groupBy = (arr: Array<any>, fn: any) => {
     arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
       // @ts-ignore
       acc[val] = (acc[val] || []).concat(arr[i]);
       return acc;
     }, {});
   }
  /**
   * 获取分组元素中每个组的元素个数
   * @param arr
   * @param fn
   */
  static countBy = (arr: Array<any>, fn: any) =>
      arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
        // @ts-ignore
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {})
  /**
   * 将数组平铺到指定的深度
   * @param arr
   * @param depth
   */
  static flatten = (arr: Array<any>, depth: number = 1) => {
    depth !== 1
        ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? GArray.flatten(v, depth - 1) : v), [])
        : arr.reduce((a, v) => a.concat(v), []);
  }

  /**
   * 计算数组中元素出现的次数
   * @param arr
   * @param val
   */
  static getNumInArr = (arr: Array<any>, val: any): number => arr.reduce((a, v) => (v === val ? a + 1 : a + 0), 0);

  /**
   * 深度平铺数组
   * @param arr
   */
  static deepFlatten = (arr: Array<any>): Array<any> => [].concat(...arr.map(v => (Array.isArray(v) ? GArray.deepFlatten(v) : v)));
  /**
   * 比较数组中不同的元素
   * @param a
   * @param b
   */
  static difference =  (a: Array<any>, b: Array<any>): Array<any> => {
    // @ts-ignore
    const s = new Set(b);
    return a.filter(x => !s.has(x));
  }

  /**
   * 过滤掉数组中的非唯一值
   * @param arr
   */
  static filterNonUnique = (arr: Array<any>): Array<any> => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
  /**
   * 删除数组中的元素，直到传递的函数返回 true。返回数组中的其余元素。
   * @param arr
   * @param func
   */
  static dropElements = (arr: Array<any>, func: any): Array<any> => {
    while (arr.length > 0 && !func(arr[0])) {
      arr = arr.slice(1);
    }
    return arr;
  }

  /**
   * 通过比较函数比较两个数组的差异
   * @param arr
   * @param val
   * @param comp
   */
  static differenceWith = (arr: Array<any>, val: Array<any>, comp:any) => {
    // @ts-ignore
    arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
  }

  /**
   * 数组去重
   * @param arr
   */
  // @ts-ignore
  static oneValuesOfArray = (arr: Array<any>):Array<any> => [...new Set(arr)];
  /**
   *  返回指定元素的所有索引
   * @param arr
   * @param val
   */
  static indexOfAll = (arr: Array<any>, val: any): Array<number> => {
    const indices: Array<number> = [];
    arr.forEach((el, i) => el === val && indices.push(i));
    return indices;
  }

  /**
   * 从数组中移除给定函数返回 false 的元素。
   * @param arr
   * @param func
   */
  static remove = (arr: Array<any>, func:any) => {
    Array.isArray(arr)
        ? arr.filter(func).reduce((acc, val) => {
          arr.splice(arr.indexOf(val), 1);
          // @ts-ignore
          return acc.concat(val);
        }, [])
        : [];
  }

  /**
   * 获得数组中的每个第 n 个元素
   * @param arr
   * @param nth
   */
  static everyNth = (arr:Array<any>, nth: number) => arr.filter((e, i) => i % nth === nth - 1);

  /**
   * 初始化一个二维数组
   * @param w 长度
   * @param h 行
   * @param val 值
   */
  static initArray = (w: number, h: number, val: any) => {
    // @ts-ignore
    Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));
  }

  /**
   * 数组分块
   * @param arr
   * @param size
   */
  static chunk (arr: Array<any>, size: number): Array<any> {
    // @ts-ignore
    return Array.from({length: Math.ceil(arr.length / size)}, (v: number, i: number) => arr.slice(i * size, i * size + size));
  }

}
