/**
 * 函数装饰器
 * @param message
 * @constructor
 */
function Confirm(message: string) {
  return (_target: object, _key: keyof object, descriptor: PropertyDescriptor) => {
    const original = descriptor.value
    descriptor.value = function(...args: any) {
      const allow = window.confirm(message)
      if (allow) {
        return original.apply(this, ...args)
      } else {
        return null
      }
    }
    return descriptor
  }
}

export default Confirm
