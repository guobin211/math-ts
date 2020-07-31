function anyElement<T>(arr: T[], fn: (e: T) => boolean) {
  return arr.some(fn)
}

export default anyElement
