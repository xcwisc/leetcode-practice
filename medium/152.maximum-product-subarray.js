/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let prevMax = nums[0];
    let prevMin = nums[0];
    let opt = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > 0) {
            prevMax = Math.max(nums[i], prevMax * nums[i]);
            prevMin = Math.min(nums[i], prevMin * nums[i]);
        } else {
            let temp = prevMax;
            prevMax = Math.max(nums[i], prevMin * nums[i]);
            prevMin = Math.min(nums[i], temp * nums[i]);
        }
        // console.log(prevMax);
        opt = Math.max(opt, prevMax);
    }

    return opt;
};

// console.log(maxProduct([-4, -3, -2]));