/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
	if (!root) {
		return root;
	}
	let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
};
