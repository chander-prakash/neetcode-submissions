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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let arr = [];

        let dfs = (node) => {
            if (!node) {
                arr.push('N');
                return;
            };
            arr.push(node.val);
            dfs(node.left);
            dfs(node.right);
        };
        dfs(root);
        console.log(`logs::: arr`, arr);
        return arr.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let arr = data.split(',');

        let index = 0;


        const dfs = () => {
            if (arr[index] === 'N') {
                index++;
                return null;
            }

            let node = new TreeNode(Number(arr[index]));
            index++;

            node.left = dfs();
            node.right = dfs();

            return node;
        };

        return dfs();

    }
}
