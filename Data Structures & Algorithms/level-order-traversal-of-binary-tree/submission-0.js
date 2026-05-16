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
     * @return {number[][]}
     */
    levelOrder(root) {

        if (!root) return [];
        let res = [];
        let queue = [root];

        while(queue.length) {
            let n = queue.length;
            let temp = [];

            for (let i = 0; i < n; i++) {
                const node = queue.shift();
                temp.push(node.val);
                if (node.left !== null) queue.push(node.left);
                if (node.right !== null) queue.push(node.right);
            }

            res.push(temp);
        }

        return res;
    }
}
