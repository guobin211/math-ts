/**
 * 函数装饰器
 * @param message
 * @constructor
 */
export function Confirm(message: string) {
    return (target: object, key: keyof object, descriptor: PropertyDescriptor) => {
        const original = descriptor.value;
        descriptor.value = function(...args: any) {
            const allow = window.confirm(message);
            if (allow) {
                return original.apply(this, ...args);
            } else {
                return null;
            }
        };
        return descriptor;
    };
}
