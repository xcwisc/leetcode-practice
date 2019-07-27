/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
	let lHead = null;
	let rHead = null;
	let lStart = null;
	let rStart = null;

	while (head) {
		if (head.val < x) {
			if (!lHead) {
				lHead = head;
				lStart = head;
			} else {
				lHead.next = head;
				lHead = lHead.next;
			}
		} else {
			if (!rHead) {
				rHead = head;
				rStart = head;
			} else {
				rHead.next = head;
				rHead = rHead.next;
			}
		}
		head = head.next;
	}

	if (lHead) {
		lHead.next = rStart;
		if (rHead) {
			rHead.next = null;
		}
		return lStart;
	} else {
		if (rHead) {
			rHead.next = null;
		}
		return rStart;
	}
};

// function ListNode(val) {
// 	this.val = val;
// 	this.next = null;
// }
// let a = new ListNode(1);
// let b = new ListNode(4);
// let c = new ListNode(3);
// let d = new ListNode(2);
// let e = new ListNode(5);
// let f = new ListNode(2);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// let i = partition(a, 3);
// while (i) {
// 	console.log(i.val);
// 	i = i.next;
// }