/**
 * 循环队列
 */
export class LoopQueue<E> {
  private data: E[];
  private front: number;
  private readonly tail: number;
  private readonly size: number;
  private capacity: number;

  constructor(capacity?: number) {
    this.data = [];
    this.front = 0;
    this.tail = 0;
    this.size = 0;
    this.capacity = capacity ? capacity + 1 : -1;
  }

  public getCapacity() {
    return this.capacity - 1;
  }

  public isEmpty() {
    return this.front = this.tail;
  }

  public getSize() {
    return this.size;
  }
  
  public enqueue(e: E) {
    if ((this.tail + 1) % this.data.length === this.front) {
      this._resize(this.getCapacity() * 2);
    }
  }

  private _resize(newCapacity: number) {
    this.capacity = newCapacity;
  }
}
