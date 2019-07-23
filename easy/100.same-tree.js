/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return isSameTreeHelper(p, q);
};

var isSameTreeHelper = function(p, q) {
	if (p === null && q === null) {
		return true;
	}
	if (p === null || q == null) {
		return false;
	}
	if (p.val !== q.val) {
		return false;
	}
	return isSameTreeHelper(p.left, q.left) && isSameTreeHelper(p.right, q.right);
}
