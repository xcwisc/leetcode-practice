/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	let ans = [];
	nums.sort((a, b) => { return a - b; });
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			break;
		}
		if (i !== 0 && nums[i] === nums[i-1]) {
			continue;
		}
		let l = i + 1;
		let r = nums.length - 1;
		let target = 0 - nums[i];
		while (l < r) {
			if (target === nums[l] + nums[r]) {
				if (l-1 >= 0 && r+1 <= nums.length-1 && nums[l] === nums[l-1] && nums[r] === nums[r+1]) {
					l++;
					r--;
				} else {
					ans.push([nums[i], nums[l], nums[r]]);
					l++;
					r--;
				}
			} else if (target < nums[l] + nums[r]) {
				r--;
			} else {
				l++;
			}
		}
	}
	return ans;
};
