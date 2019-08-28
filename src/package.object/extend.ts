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
  for (const props in source1) {
    (result as any)[props] = (source1 as any)[props];
  }
  for (const props in source2) {
    (result as any)[props] = (source2 as any)[props];
  }
  return result;
}
