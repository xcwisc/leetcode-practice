/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return isBalancedHelper(root).balanced;
};

var isBalancedHelper = function(node) {
	let ans = {
		depth: 0,
		balanced: true
	};
	if (!node) {
		return ans;
	}
	let lSubtree = isBalancedHelper(node.left);
	let rSubtree = isBalancedHelper(node.right);
	ans.depth = Math.max(lSubtree.depth, rSubtree.depth) + 1;
	ans.balanced = Math.abs(lSubtree.depth - rSubtree.depth) <= 1;
	ans.balanced = ans.balanced && lSubtree.balanced && rSubtree.balanced;
	return ans;
}