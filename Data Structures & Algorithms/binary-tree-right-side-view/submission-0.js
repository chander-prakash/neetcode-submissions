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
     * @return {number[]}
     */
    rightSideView(root) {

        if (!root) return [];
        let res = [];
        let queue = [root];

        while (queue.length) {
            let n = queue.length;

            for (let i = 0; i < n; i++) {
                const node = queue.shift();
                if (i == n - 1) {
                    res.push(node.val)
                }

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }

        return res;
    }
}
