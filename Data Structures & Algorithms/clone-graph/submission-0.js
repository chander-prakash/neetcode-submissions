/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {

        if (!node) return null;
        let hashMap = new Map();

        const dfs = (current) => {
            if (hashMap.has(current)) {
                return hashMap.get(current);
            }

            let cloned = new Node(current.val);
            hashMap.set(current, cloned);

            for (let neighbor of current.neighbors) {
                cloned.neighbors.push(dfs(neighbor));
            }

            return cloned;

        }

        return dfs(node);
    }
}
