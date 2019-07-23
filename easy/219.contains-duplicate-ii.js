/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let hashmap = {};
    for (let num in nums) {
    	if (!hashmap[nums[num]]) {
    		hashmap[nums[num]] = [num];
    	} else {
    		for (let neibr in hashmap[nums[num]]) {
    			if (Math.abs(hashmap[nums[num]][neibr] - num) <= k) {
    				return true;
    			}
    		}
    		hashmap[nums[num]].push(num);
    	}
    }
    return false;
};
