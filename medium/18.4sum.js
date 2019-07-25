/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
	nums.sort((a, b) => { return a - b; });
	let ans = [];
    for (let i = 0; i < nums.length-3; i++) {
    	if (i !== 0 && nums[i] === nums[i-1]) {
    		continue;
    	}
    	for (let j = i+1; j < nums.length-2; j++) {
    		if (j !== i+1 && nums[j] === nums[j-1]) {
    			continue;
    		}
    		let l = j+1;
    		let r = nums.length-1;
    		let sumOfLastTwo = target - nums[i] - nums[j];
    		while (l < r) {
    			if (sumOfLastTwo < nums[l] + nums[r]) {
    				r--;
    			} else if (sumOfLastTwo > nums[l] + nums[r]) {
    				l++;
    			} else {
    				if (l-1 > 0 && r+1 < nums.length && nums[l-1] === nums[l] && nums[r+1] === nums[r]) {
    					l++;
    					r--;
    				} else {
    					// console.log(i,j,l,r);
    					ans.push([nums[i], nums[j], nums[l], nums[r]]);
    					l++;
    					r--;
    				}
    			}
    		}
    	}
    }
    return ans;
};

// console.log(fourSum([0,0,0,1,3,5],6));