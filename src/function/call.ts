/**
 * call
 *
 * @author GuoBin on 2019-07-17
 */

Function.prototype.call = function(context: any) {
    if (typeof this !== "function") {
        throw new TypeError("not function");
    }
    context = context || window;
    context.fn = this;
    const arg = [...arguments].slice(1);
    const res = context.fn(...arg);
    delete context.fn;
    return res;
};
