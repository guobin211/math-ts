export type CompareResult = -1 | 0 | 1

export interface Comparable<T> {
  compareTo(another: T): CompareResult
}

export type compareFn<T> = (a: T, b: T) => CompareResult
