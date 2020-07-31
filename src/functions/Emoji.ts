/**
 * Emoji注解
 * @constructor
 */
function Emoji() {
  return (target: object, key: keyof object) => {
    let val: any = target[key]
    const getter = () => {
      return val
    }
    const setter = (value: string) => {
      val = `😀${value}😀`
    }
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    })
  }
}

export default Emoji
