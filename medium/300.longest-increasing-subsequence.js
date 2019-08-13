/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let memo = [1];
    let opt = 1;
    for (let i = 1; i < nums.length; i++) {
        memo.push(1);
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                memo[i] = Math.max(memo[i], memo[j]+1);
            }
        }
        opt = Math.max(opt, memo[i]);
    }

    return opt;
};
