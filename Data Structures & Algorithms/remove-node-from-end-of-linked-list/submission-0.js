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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let temp = head;
        let count = 0;

        while (temp != null) {
            count++;
            temp = temp.next;
        }

        let target = count - n;

        // remove head
        if (target === 0) return head.next;

        let curr = head;
        for (let i = 1; i < target; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;

        return head;
    }
}
