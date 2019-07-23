/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // let memo = [];
    // for (let i = 0; i < nums.length; i++) {
    // 	memo.push(false);
    // }
    // memo[0] = true;

    // for (let i = 0; i < nums.length; i++) {
    // 	if (memo[i]) {
    // 		for (let j = 1; j < nums[i]+1; j++) {
    // 			memo[i+j] = true;
    // 		}
    // 	}
    // }
    // return memo[nums.length-1];

    let furthest = nums[0];
    let curr = 0;
    while(curr <= furthest && curr < nums.length) {
    	furthest = Math.max(furthest, curr+nums[curr]);
    	// console.log(furthest);
    	curr++;
    }
    return furthest >= nums.length-1;
};

// console.log(canJump([1,1,0]))