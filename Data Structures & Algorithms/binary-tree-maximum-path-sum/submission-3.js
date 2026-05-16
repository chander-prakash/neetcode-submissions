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
     * @return {number}
     */
    maxPathSum(root) {
        let maxSum = -Infinity;

        const find = (node) => {
            
            if (!node) return 0;
            let leftGain = Math.max(0, find(node.left));
            let rightGain = Math.max(0, find(node.right));

            let currentPath = node.val + leftGain + rightGain;
          
            maxSum = Math.max(currentPath, maxSum);
            return node.val + Math.max(leftGain,rightGain);

        }

        find(root);

        return maxSum;
    }
}
