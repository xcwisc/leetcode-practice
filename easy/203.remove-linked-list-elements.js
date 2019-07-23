/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	while (head !== null && head.val === val) {
		head = head.next;
	}
	let ans = head;
    while (head !== null && head.next !== null) {
    	if (head.next.val === val) {
    		head.next = head.next.next;
    	} else {
    		head = head.next;
    	}
    }
    return ans;
};
