/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let totalProduct = 1;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (count < 2) {
        count++;
        continue;
      } else {
        break;
      }
    }
    totalProduct *= nums[i];
  }
  let ans = [];
  if (count === 0) {
    for (let i = 0; i < nums.length; i++) {
      ans.push(totalProduct / nums[i]);
    }
  } else if (count === 1) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        ans.push(totalProduct);
      } else {
        ans.push(0);
      }
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      ans.push(0);
    }
  }
  return ans;
};