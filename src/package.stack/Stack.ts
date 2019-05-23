export class Stack<T> {

  private _store: any[] = [];

  private top: any;

  constructor() {
    this.top = 0;
  }

  public clear(): void {
    this._store = [];
    this.top = 0;
  }

  public peek(): T {
    return this._store[this.top - 1];
  }

  public pop(): T {
    if (this.top > 0) {
      return this._store[--this.top];
    } else {
      throw new Error('Stack is empty');
    }

  }

  public push(el: T): void {
    this._store[this.top++] = el;
  }

  public isEmpty(): boolean {
    return this.top === 0;
  }
}
