export class Tree<T> {
  private _value: T;
  private _left?: Node;
  private _right?: Node;

  constructor(data: T, left?: Node, right?: Node) {
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
