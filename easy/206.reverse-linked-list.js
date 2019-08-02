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
var reverseList = function (head) {
	if (!head || !head.next) {
		return head;
	}
	let l = head;
	let r = head.next;
	let next = head.next.next;
	l.next = next;
	r.next = l;
	[l, r] = [r, l];

	while (next) {
		let curr = next;
		next = next.next;
		r.next = next;
		curr.next = l;
		l = curr;
	}
	return l;
};