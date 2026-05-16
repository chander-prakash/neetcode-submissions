// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        
        if (head === null) return null;
        
        let map = new Map();
        
        let curr = head;
        while (curr !== null) {
            map.set(curr, new Node(curr.val));
            curr = curr.next;
        }


        curr = head;
        while (curr !== null) {
            let copied = map.get(curr);
            
            copied.next = curr.next !== null ? map.get(curr.next) : null;
            copied.random = curr.random !== null ? map.get(curr.random) : null;
            curr = curr.next;
        }

        return map.get(head);
      
    }
}
