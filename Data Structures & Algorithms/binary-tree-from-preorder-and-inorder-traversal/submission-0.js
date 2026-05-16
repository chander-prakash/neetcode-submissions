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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        
        let preOrderIndex = 0;
        let map = new Map();

        for (let i = 0; i < inorder.length; i++) {
            map.set(inorder[i], i);
        }

        const helperFunction = (left, right) => {
            
            if (left > right) return null;

            let rootVal = preorder[preOrderIndex++];
            let root = new TreeNode(rootVal);

            let mid = map.get(rootVal);

            root.left = helperFunction(left, mid - 1);
            root.right = helperFunction(mid + 1, right);

            return root;
        }

        return helperFunction(0, inorder.length-1);

    }
}
