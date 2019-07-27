/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	if (nums.length === 0) {
		return 0;
	}
    let i = 1;
    let currVal = nums[0];
    let count = 1;
    while (i < nums.length) {
    	if (currVal !== nums[i]) {
    		currVal = nums[i];
    		count = 1;
    		i++;
    	} else {
    		count++;
    		if (count > 2) {
    			nums.splice(i, 1);
    		} else {
    			i++;
    		}
    	}
    }
    return nums.length;
};
