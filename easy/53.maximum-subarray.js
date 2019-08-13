/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let opt = nums[0];
    let currOpt = Math.max(0, opt);
    for (let i = 1; i < nums.length; i++) {
        opt = Math.max(opt, currOpt + nums[i]);
        if (currOpt + nums[i] > 0) {
            currOpt += nums[i];
        } else {
            currOpt = 0;
        }
    }
    return opt;
};
