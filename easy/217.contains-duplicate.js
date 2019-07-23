/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashmap = {};
    for (let num in nums) {
    	if (!hashmap[nums[num]]) {
    		hashmap[nums[num]] = 1;
    	} else {
    		return true;
    	}
    }
    return false;
};
