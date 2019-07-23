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
var addTwoNumbers = function(l1, l2) {
    if (!l1 && !l2) {
    	return null;
    }
    if (!l1) {
    	return l2;
    }
    if (!l2) {
    	return l1;
    }
    let ans = new ListNode(0);
    let curr = ans;
    let carry = 0;
    while (l1 && l2) {
    	curr.val = l1.val + l2.val + carry;
    	if (curr.val >= 10) {
    		curr.val -= 10;
    		carry = 1;
    	} else {
    		carry = 0;
    	}
    	l1 = l1.next;
    	l2 = l2.next;
    	if (l1 || l2 || carry === 1) {
    		curr.next = new ListNode(0);
    		curr = curr.next;
    	}
    }
    while (l1) {
    	curr.val = l1.val + carry;
    	if (curr.val >= 10) {
    		curr.val -= 10;
    		carry = 1;
    	} else {
    		carry = 0;
    	}
    	l1 = l1.next;
    	if (l1 || l2 || carry === 1) {
    		curr.next = new ListNode(0);
    		curr = curr.next;
    	}
    }
    while (l2) {
    	curr.val = l2.val + carry;
    	if (curr.val >= 10) {
    		curr.val -= 10;
    		carry = 1;
    	} else {
    		carry = 0;
    	}
    	l2 = l2.next;
    	if (l1 || l2 || carry === 1) {
    		curr.next = new ListNode(0);
    		curr = curr.next;
    	}
    }
    if (carry === 1) {
    	curr.val = 1;
    }
    return ans;
};
