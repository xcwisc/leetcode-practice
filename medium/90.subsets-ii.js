/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => { return a - b; });
    let ans = [];
    subsetsWithDupHelper(nums, ans, [], 0, true);
    return ans;
};

var subsetsWithDupHelper = function(nums, ans, memo, curr, putInAns) {
	if (curr === nums.length) {
		ans.push(memo);
		return;
	}

	if (curr !== 0 && nums[curr] === nums[curr-1]) {
		if (putInAns) {
			subsetsWithDupHelper(nums, ans, [...memo, nums[curr]], curr+1, true);
			subsetsWithDupHelper(nums, ans, [...memo], curr+1, false);
		} else {
			subsetsWithDupHelper(nums, ans, [...memo], curr+1, false);
		}
	} else {
		subsetsWithDupHelper(nums, ans, [...memo, nums[curr]], curr+1, true);
		subsetsWithDupHelper(nums, ans, [...memo], curr+1, false);
	}
}
