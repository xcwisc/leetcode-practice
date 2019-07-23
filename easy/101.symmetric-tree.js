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
// var isSymmetric = function(root) {
//     if (!root) {
//     	return true;
//     }
//     return isSymmetricHelper(root.left, root.right);
// };

// var isSymmetricHelper = function(l, r) {
// 	if (l === null && r === null) {
// 		return true;
// 	}
// 	if (l === null || r === null) {
// 		return false;
// 	}
// 	if (l.val !== r.val) {
// 		return false;
// 	}
// 	return isSymmetricHelper(l.left, r.right) && isSymmetricHelper(l.right, r.left);
// }

var isSymmetric = function(root) {
	if (!root) {
		return true;
	}
	let lNode = new TreeNodeCustom(root.left);
	let rNode = new TreeNodeCustom(root.right);
    let stack = [lNode, rNode];
    while (stack.length !== 0) {
    	lNode = stack[stack.length-2];
    	rNode = stack[stack.length-1];
    	if (lNode.treeNode === null && rNode.treeNode === null) {
    		stack.pop();
    		stack.pop();
    	} else if (lNode.treeNode === null || rNode.treeNode === null) {
    		return false;
    	} else {
    		if (lNode.lVisited && lNode.rVisited) {
    			if (lNode.treeNode.val !== rNode.treeNode.val) {
    				return false;
    			}
    			stack.pop();
    			stack.pop();
    		} else if (!lNode.lVisited) {
    			stack.push(new TreeNodeCustom(lNode.treeNode.left));
    			stack.push(new TreeNodeCustom(rNode.treeNode.right));
    			lNode.lVisited = true;
    		} else if (!lNode.rVisited) {
    			stack.push(new TreeNodeCustom(lNode.treeNode.right));
    			stack.push(new TreeNodeCustom(rNode.treeNode.left));
    			lNode.rVisited = true;
    		}
    	}
    }
    return true;
};

function TreeNodeCustom(treeNode) {
	this.treeNode = treeNode;
	this.lVisited = false;
	this.rVisited = false;
}
