export class Tree<T> {
  private _value: T;
  private _left?: T;
  private _right?: T;

  constructor(data: T, left?: T, right?: T) {
    this._value = data;
    this._left = left;
    this._right = right;
  }

  get value() {
    return this._value;
  }

  set value(value: T) {
    this._value = value;
  }
}
