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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) { return false; }
    return hasPathSumHelper(root, sum);
};

var hasPathSumHelper = function(root, sum) {
	if (!root) {
    	return sum === 0;
    }
    if (!root.left && root.right) {
    	return hasPathSumHelper(root.right, sum-root.val);
    }
    if (!root.right && root.left) {
    	return hasPathSumHelper(root.left, sum-root.val);
    }
    return hasPathSumHelper(root.left, sum-root.val) || hasPathSumHelper(root.right, sum-root.val);
};
