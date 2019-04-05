/**
 * 0
 * 1
 * 2
 * setTimeout
 * 3
 * setTimeout
 * 3
 * setTimeout
 * 3
 */
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log('setTimeout');
    console.log(i);
  }, 0);
  console.log(i);
}

/**
 * 0
 * 1
 * 2
 * setTimeout
 * 0
 * setTimeout
 * 1
 * setTimeout
 * 2
 */
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log('setTimeout');
    console.log(i);
  }, 0);
  console.log(i);
}


