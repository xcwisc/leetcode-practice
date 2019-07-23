/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
	let ans = [];
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
    	let m = Math.floor((l+r)/2);
    	if (nums[m] < target) {
    		l = m + 1;
    	} else if (nums[m] > target) {
    		r = m - 1;
    	} else {
    		r = m;
    	}
    }
    if (nums[l] === target) {
    	ans.push(l);
    } else {
    	ans.push(-1);
    }
    
    l = 0;
    r = nums.length - 1;
    while (l < r) {
    	let m = Math.ceil((l+r)/2);
    	if (nums[m] < target) {
    		l = m + 1;
    	} else if (nums[m] > target) {
    		r = m - 1;
    	} else {
    		l = m;
    	}
    }
    if (nums[l] === target) {
    	ans.push(l);
    } else {
    	ans.push(-1);
    }
    return ans;
};
