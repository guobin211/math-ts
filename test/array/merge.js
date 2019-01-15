/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

  nums1.splice(m, nums1.length);

  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }

  nums1 = nums1.filter(el => el !== 0);

  for (let i = 0; i < nums1.length - 1; i++) {
    for (let j = i + 1; j < nums1.length; j++) {
      if (nums1[i] > nums1[j]) {
        let temp = nums1[i];
        nums1[i] = nums1[j];
        nums1[j] = temp;
      }
    }
  }
};


let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;


console.log(merge(nums1, m, nums2, n));
