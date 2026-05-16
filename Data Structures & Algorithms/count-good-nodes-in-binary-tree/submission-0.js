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
    goodNodes(root) {
        
        let count = 0;

        const dfs = (node, maxCurrent) => {
            if (!node) return 0;

            if (node.val >= maxCurrent) {
                count++;
            }

            let newMax = Math.max(maxCurrent, node.val);

            dfs(node.left, newMax);
            dfs(node.right, newMax);
        }
        dfs(root,root.val)
        return count;
    }
}
