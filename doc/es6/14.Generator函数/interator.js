//  原始迭代器
function makeInyerator(arr) {
  let nextIndex = 0;
  //  返回一个迭代器对象
  return {
    //
    next: () => {
      if (nextIndex < arr.length) {
        //  每次调用 nextIndex++
        return { value: arr[nextIndex++], done: false }
      } else {
        return { done: true }
      }
    }
  }
}

const it = makeInyerator(['吃饭', '睡觉', '打豆豆']);

console.log('首先', it.next().value);
console.log('其次', it.next().value);
console.log('然后', it.next().value);
console.log('最后', it.next().done);

//  *生成器函数  （语法糖迭代器）
function *iterators(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}

const it2 = iterators(['吃饭', '睡觉', '打豆豆']);

console.log('首先', it2.next().value);
console.log('其次', it2.next().value);
console.log('然后', it2.next().value);
console.log('最后', it2.next().done);