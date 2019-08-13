/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    var robHelper = function(l, r) {
        let prev = nums[l];
        let curr = Math.max(prev, nums[l+1]);
        for (let i = l+2; i < r; i++) {
            let opt = Math.max(prev + nums[i], curr);
            prev = curr;
            curr = opt;
        }
        return curr;
    }
    return Math.max(robHelper(0, nums.length-1), robHelper(1, nums.length));
};
