/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => { return a - b });
    nums2.sort((a, b) => { return a - b });
    let l = 0;
    let r = 0;
    let ans = [];
    while (l < nums1.length && r < nums2.length) {
    	if (nums1[l] === nums2[r]) {
    		ans.push(nums2[r]);
    		l++;
    		r++;
    	} else if (nums1[l] < nums2[r]) {
    		l++;
    	} else {
    		r++;
    	}
    }
    return ans;
};