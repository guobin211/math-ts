Array.prototype.sort = function(arr) {
  let len = arr.length, temp;
  for (let i = 0; i < len - 1; i++) {
    for (let j = len-1; j > i; j--) {
      if(arr[j] < arr[j - 1]) {
        temp = arr[j];
        arr[j] = arr[j -1];
        arr[j-1] = temp;
      }
    }
  }
}