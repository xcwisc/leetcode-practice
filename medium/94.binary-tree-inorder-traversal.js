/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // let ans = [];
    // var inorderTraversalHelper = function(node) {
    // 	if (!node) {
    // 		return;
    // 	}

    // 	inorderTraversalHelper(node.left);
    // 	ans.push(node.val);
    // 	inorderTraversalHelper(node.right);
    // }
    // inorderTraversalHelper(root);
    // return ans;

    let stack = [];
    let ans = [];

    while (stack.length > 0 || root) {
    	if (root) {
    		stack.push(root);
    		root = root.left;
    	} else {
    		root = stack.pop();
    		ans.push(root.val);
    		root = root.right;
    	}
    }

    return ans;
};
