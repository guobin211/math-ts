/**
 * BST
 * @author guobin201314@gmail.com on 2019-03-09
 */
export class Node<T> {

  public data: T;
  public left?: Node<T>;
  public right?: Node<T>;

  constructor(data: T, left?: Node<T>, right?: Node<T>) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

