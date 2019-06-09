/**
 * test
 * @author guobin201314@gmail.com on 2019-05-31
 */

const res = {
  code: 200,
  data: {
    page: 1,
    list: [
      {
        name: 'jack',
        age: 22
      },
      {
        name: 'jack',
        age: 22
      }
    ]
  }
};

class IRes {
  code: number;
  data: List[];
  constructor() {
    this.code = 0;
    this.data = [];
  }
}
class List {
  name: string;
  age: number;
  constructor() {
    this.age = 0;
    this.name = '';
  }
}

interface IList {
  name: string;
  age: number;
}

// 基本类型 string number null undefined object
// object
console.log(typeof res);
// false
console.log(res instanceof IRes);
// true
console.log(res instanceof Object);
console.log(res.data.list instanceof Array);

const vdata = new IRes();
// true
console.log(vdata instanceof IRes);

const mock = {} as IList;
console.log(mock as IList);
mock.name = 'jack';
console.log(mock);
