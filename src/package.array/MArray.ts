/**
 *  @name MArray
 *  @description MArray
 *  @author GuoBin201314@gmail.com
 *  @date 2018/11/18 20:53
 */
export class MArray {

    /**
     * 数组分块
     * @param arr Array
     * @param size Number
     */
    static chunk = (arr: Array<any>, size: number): Array<any> => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        )
    };
    /**
     * 过滤假值元素(false, null, 0, "", undefined, 和 NaN)
     * @param arr
     */
    static compact = (arr: Array<any>): Array<any> => arr.filter(Boolean);

    /**
     * 计算元素出现的次数
     * @param arr
     * @param val
     */
    static occurrence = (arr: Array<any>, val: any) => {
        arr.reduce((a, v) => {
           return v ===val? a + 1: a + 0
        }, 0)
    };
    /**
     * 平铺数组
     * @param arr
     */
    static deepFlatten = (arr: Array<any>): Array<any> => {
        return [].concat(...arr.map(v => (Array.isArray(v) ? MArray.deepFlatten(v) : v)))
    };

    /**
     * 数组比较差异
     * @param a
     * @param b
     */
    static difference = (a: Array<any>, b: Array<any>) => {
        const s = new Set(b);
        return a.filter(x => !s.has(x));
    };

    /**
     * 通过比较函数比较数组之间的差异
     * @param arr
     * @param val
     * @param comp
     */
    static differenceWith = (arr: Array<any>, val: Array<any>, comp: Function) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

    /**
     * 数组去重
     * @param arr
     */
    static distinctValuesOfArray = (arr: Array<any>) => {
        const temp = [];
        const index = [];
        const l = arr.length;
        for(let i = 0; i < l; i++) {
            for(let j = i + 1; j < l; j++){
                if (arr[i] === arr[j]){
                    i++;
                    j = i;
                }
            }
            temp.push(arr[i]);
            index.push(i);
        }
        return temp;
    };

}
