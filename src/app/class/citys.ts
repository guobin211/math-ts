export class Citys {
  constructor(
    value: string,
    label: string,
    children: Array<Children>
  ) {}
}
export class Children {
  constructor(
    value: string,
    label: string,
    isLeaf: true,
    children: Array<Children>
  ) {}
}
