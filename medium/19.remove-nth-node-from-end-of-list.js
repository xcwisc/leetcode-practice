/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	let fast = head;
	let slow = head;
    for (let i = 0; i < n; i++) {
    	fast = fast.next;
    }
    while (fast && fast.next) {
    	slow = slow.next;
    	fast = fast.next;
    }
    if (!fast) {
    	return slow.next;
    }
    slow.next = slow.next.next;
    return head;
};
