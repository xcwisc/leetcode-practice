/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let l = 0;
    while (nums[l] === 0) {
    	l++;
    }
    let r = nums.length - 1;
    while (nums[r] === 2) {
    	r--;
    }

    let curr = l;
    while (curr <= r) {
    	if (nums[curr] === 0) {
    		let temp = nums[l];
    		nums[l] = nums[curr];
    		nums[curr] = temp;
    		l++;
    	} else if (nums[curr] === 2) {
    		let temp = nums[r];
    		nums[r] = nums[curr];
    		nums[curr] = temp;
    		r--;
    	}
    	// console.log(nums);
    	if (nums[curr] === 1 || (nums[curr] === 0 && curr === l)) {
    		curr++;
    	}
    }
};

// sortColors([2,2,1,1,0,1,0]);
