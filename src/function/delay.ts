/**
 * 延迟调用函数
 * @param fn
 * @param t
 */
export function delay(fn: Function, t: number) {
    setTimeout(() => {
        fn();
    }, t);
}
