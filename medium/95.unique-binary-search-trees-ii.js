/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
	if (n === 0) {
		return [];
	}
    return generateTreesHelper(1, n);
};

var generateTreesHelper = function(l, r) {
	let ans = [];
	if (l > r) {
		return [null];
	}

	for (let i = l; i < r+1; i++) {
		let lTreeArr = generateTreesHelper(l, i-1);
		let rTreeArr = generateTreesHelper(i+1, r);

		for (let j = 0; j < lTreeArr.length; j++) {
			for (let k = 0; k < rTreeArr.length; k++) {
				let node = new TreeNode(i);
				node.left = lTreeArr[j];
				node.right = rTreeArr[k];
				ans.push(node);
			}
		}
	}

	return ans;
}