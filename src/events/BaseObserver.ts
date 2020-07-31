export interface BaseObserver<T> {
  onNotify(data: T): void
}
