/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	if (l1 === null) {
		return l2;
	}
	if (l2 === null) {
		return l1;
	}
	let head;
	let other;
	if (l1.val < l2.val) {
		head = l1;
		other = l2;
	} else {
		head = l2;
		other = l1;
	}
	let curr = head;

    while (curr.next !== null && other !== null) {
    	if (curr.next.val < other.val) {
    		curr = curr.next;
    	} else {
    		let temp = curr.next;
    		curr.next = other;
    		other = temp;
    		curr = curr.next;
    	}
    }
    if (other !== null) {
    	curr.next = other;
    }
    return head;
};
