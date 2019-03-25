for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log('setTimeout');
    console.log(i);
  }, 1);
  console.log(i);
}