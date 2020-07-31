function isSorted<T>(arr: Array<T>, compare: (a: T, b: T) => boolean): boolean {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (!compare(arr[j], arr[i])) {
        return false
      }
    }
  }
  return true
}

export default isSorted
