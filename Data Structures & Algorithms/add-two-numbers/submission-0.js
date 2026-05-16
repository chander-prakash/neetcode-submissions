/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        let dummyNode = new ListNode(0);
        let curr = dummyNode;
        let carry = 0;

        while (carry !== 0 || l1 !== null || l2 !== null) {

            let target = (l1?.val || 0) + (l2?.val || 0) + carry;

            let digit = target % 10;
            carry = Math.floor(target / 10);

            curr.next = new ListNode(digit);
            curr = curr.next;

            if (l1 !== null) l1 = l1.next;
            if (l2 !== null) l2 = l2.next;
        }

        return dummyNode.next;

    }
}
