const arr = ['a', 1, 2, 'a', 3, 2, 'b'];

const res = arr.reduce((unique, item) => {
  console.log(
    // 1. item
    item,
    // 2. unique 
    unique,
    // 3. includes
    unique.includes(item),
    // 4. compare
    unique.includes(item) ? unique: [...unique, item],
  );

  return unique.includes(item) ? unique: [...unique, item];
})

console.log(res);