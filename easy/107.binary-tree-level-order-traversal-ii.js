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
var levelOrderBottom = function(root) {
	let ans = [];
	var levelOrderBottomHelper = function(root, depth) {
		if (!root) {
			return;
		}
		if (depth > ans.length - 1) {
			ans.push([]);
		}
		ans[depth].push(root.val);
		levelOrderBottomHelper(root.left, depth+1);
		levelOrderBottomHelper(root.right, depth+1);
	}
	levelOrderBottomHelper(root, 0);
	ans.reverse();
	return ans;
};
