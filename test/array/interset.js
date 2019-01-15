/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const res = [];
    nums1.sort();
    nums2.sort();
    
    if (nums1[0] > nums2[nums2.length] || nums2[0] > nums1[nums1.length]) {
      return res;
    }

    for (let i = 0; i < nums1.length; i++) {
      const el = nums1[i];
      const index = nums2.indexOf(el);
      if (index !== -1) {
        res.push(el);
        nums2.splice(index, 1);
      }
    }
    return res;
};

let nums1 = [1,2], nums2 = [1,1];


console.log(intersect(nums1, nums2));