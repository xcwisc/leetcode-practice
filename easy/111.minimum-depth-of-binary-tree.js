/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
    	return 0;
    }
    let lDepth = minDepth(root.left);
    let rDepth = minDepth(root.right);
    if (lDepth === 0 && rDepth !== 0) {
    	return rDepth + 1;
    }
    if (rDepth === 0 && lDepth !== 0) {
    	return lDepth + 1;
    }
    return Math.min(lDepth, rDepth) + 1;
};
