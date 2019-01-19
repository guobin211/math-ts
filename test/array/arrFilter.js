const arr = ['a', 1, 2, 'a', 3, 2, 'b'];

const res = arr.filter((item, index) => {
  console.log(
    // 1. item
    item,
    // 2. index 
    index,
    // 3. indexOf
    arr.indexOf(item),
    // 4. compare
    arr.indexOf(item) === index,
  );

  return arr.indexOf(item) === index;
})