/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        
        let arr = [];
        const inOrderTrav = (node) => {

            if (!node) return;

            inOrderTrav(node.left);
            arr.push(node.val);
            inOrderTrav(node.right);
        }
        
        inOrderTrav(root);

        return arr[k-1];
    }
}
