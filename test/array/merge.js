/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

  for (let i = 0; i < n; i++) {
    nums1[m] = nums2[i];
    m++;
  }

  nums1.sort(function (a, b) {
    return a - b;
  });

};


let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;


merge(nums1, m, nums2, n);

console.log(nums1);
