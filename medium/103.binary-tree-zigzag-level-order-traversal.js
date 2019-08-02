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
var zigzagLevelOrder = function(root) {
    let ans = [];
	var levelOrderHelper = function(depth, node) {
		if (!node) {
			return;
		}
		if (ans.length-1 < depth) {
			ans.push([]);
		}
		if (depth % 2 === 0) {
			ans[depth].push(node.val);
		} else {
			ans[depth].unshift(node.val);
		}
		
		levelOrderHelper(depth+1, node.left);
		levelOrderHelper(depth+1, node.right);
	}
	levelOrderHelper(0, root);
	return ans;
};
