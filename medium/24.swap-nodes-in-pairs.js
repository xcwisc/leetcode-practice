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
var swapPairs = function(head) {
    if (!head || !head.next) {
    	return head;
    }
    let first = head;
    let second = head.next;
    first.next = swapPairs(second.next);
    second.next = first;
    return second;
};
