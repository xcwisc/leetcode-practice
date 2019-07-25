/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
	let ans = [];
	subsetsHelper(ans, nums, [], 0);
	return ans;
};

var subsetsHelper = function(ans, nums, memo, curr) {
	if (curr === nums.length) {
		ans.push(memo);
		return;
	}

	subsetsHelper(ans, nums, [...memo], curr+1);
	subsetsHelper(ans, nums, [...memo, nums[curr]], curr+1);
}
