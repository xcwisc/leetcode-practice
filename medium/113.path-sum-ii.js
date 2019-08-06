/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let ans = [];
  if (!root) {
    return ans;
  }
  pathSumHelper(ans, [], root, sum);
  return ans;
};

var pathSumHelper = function (ans, memo, node, sum) {
  if (!node.left && !node.right) {
    if (sum === node.val) {
      ans.push([...memo, node.val]);
    }
    return;
  }
  if (node.left) {
    pathSumHelper(ans, [...memo, node.val], node.left, sum - node.val);
  }
  if (node.right) {
    pathSumHelper(ans, [...memo, node.val], node.right, sum - node.val);
  }
}