/**
 * @param {number} num
 * @return {string}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => { return a - b; });
    let opt = Infinity;
    let ans;
    for (let i = 0; i < nums.length; i++) {
    	let l = i + 1;
    	let r = nums.length - 1;
    	let twoSum = target - nums[i];
    	while (l < r) {
    		if (Math.abs(nums[l] + nums[r] - twoSum) < opt) {
    			opt = Math.abs(nums[l] + nums[r] - twoSum);
    			ans = nums[l] + nums[r] + nums[i];
    		}
    		if (twoSum < nums[l] + nums[r]) {
    			r--;
    		} else if (twoSum > nums[l] + nums[r]) {
    			l++;
    		} else {
    			return target;
    		}
    	}
    }
    return ans;
};
