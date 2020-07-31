function all<T>(arr: T[], fn: (el: T) => boolean): boolean {
  return arr.every(fn)
}

export default all
