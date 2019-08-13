/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let memo = [1];
    for (let i = 1; i <= target; i++) {
        let sum = 0;
        for (let j = 0; j < nums.length; j++) {
            if (i - nums[j] >= 0) {
                sum += memo[i - nums[j]];
            }
        }
        memo.push(sum);
    }
    return memo[target];
};
