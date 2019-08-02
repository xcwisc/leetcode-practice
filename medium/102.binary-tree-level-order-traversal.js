/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	let ans = [];
	var levelOrderHelper = function(depth, node) {
		if (!node) {
			return;
		}
		if (ans.length-1 < depth) {
			ans.push([]);
		}
		ans[depth].push(node.val);
		levelOrderHelper(depth+1, node.left);
		levelOrderHelper(depth+1, node.right);
	}
	levelOrderHelper(0, root);
	return ans;
};
