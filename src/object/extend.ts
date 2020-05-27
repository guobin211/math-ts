/**
 * 混合类型
 * @param source1
 * @param source2
 * ```
 *    class Person {
 *       constructor(){
 *         this.name = "jack";
 *       }
 *    }
 *    class Car {
 *      constructor(){}
 *      run() {
 *        console.log("runing...")
 *      }
 *    }
 *
 *    const jack: Person & Car = extend(new Person("jack"), new Car());
 *    jack.name;
 *    jack.run();
 * ```
 */
export function extend<T, U>(source1: T, source2: U): T & U {
    const result = {} as T & U;
    for (const prop in source1) {
        if ((source1 as any).hasOwnProperty(prop)) {
            (result as any)[prop] = (source1 as any)[prop];
        }
    }
    for (const prop in source2) {
        if ((source2 as any).hasOwnProperty(prop)) {
            (result as any)[prop] = (source2 as any)[prop];
        }
    }
    return result;
}
