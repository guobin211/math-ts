function bindFn<T = any>(fn: Function, otherThis: any, ...args1: any) {
  return function(...args2: any) {
    const sym = Symbol(fn.name)
    otherThis[sym] = fn
    const args = [...args1, ...args2]
    const res = otherThis.__fn(...args)
    delete otherThis[sym]
    return res as T
  }
}

export default bindFn
