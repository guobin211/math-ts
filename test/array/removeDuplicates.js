const removeDuplicates = function (nums) {
  nums.sort();
  let size = nums.length;
  for (let i = size; i > 0; i--) {
    if (nums[i] === nums[i-1]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
}

const arr = [0, 3, 1, 3, 2, 3, 4, 5];

const res = removeDuplicates(arr)
console.log(arr);
console.log(res);
