/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	if (nums.length === 0) {
		return -1;
	}
    let l = 0;
    let r = nums.length - 1;
    let m = Math.floor((l+r)/2);
    // console.log(`l: ${l}  r: ${r}  m: ${m}`);
    while (l !== r) {
    	if (nums[l] <= nums[m]) {
    		if (target < nums[m] && target >= nums[l]) {
    			r = m-1;
    		} else if (target === nums[m]) {
    			return m;
    		} else {
    			l = m+1;
    		}
    	} else {
    		if (target > nums[m] && target <= nums[r]) {
    			l = m+1;
    		} else if (target === nums[m]) {
    			return m;
    		} else {
    			r = m-1;
    		}
    	}
    	m = Math.floor((l+r)/2);
    	// console.log(`l: ${l}  r: ${r}  m: ${m}`);
    }
    if (nums[l] === target) {
    	return l;
    }
    return -1;
};

// console.log(search([4,5,6,7,0,1,2], 0));
