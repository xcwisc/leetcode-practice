/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
	if (head === null) {
		return null;
	}
	let ans = head;
    let prev = head;
    while (prev.next !== null) {
    	head = prev.next;
    	if (head.val === prev.val) {
    		prev.next = head.next;
    	} else {
    		prev = head;
    	}
    }
    return ans;
};
