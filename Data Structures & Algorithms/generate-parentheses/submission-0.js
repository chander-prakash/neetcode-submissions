class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];

        const backtracking = (current, openCount, closeCount) => {
    
            if (openCount == n && closeCount === n) {
                res.push(current.join(''));
                return;
            }

            if (openCount < n) {
                current.push('(');
                backtracking(current, openCount + 1, closeCount);
                current.pop();
            }

            if (closeCount < openCount) {
                current.push(')');
                backtracking(current, openCount , closeCount + 1);
                current.pop();
            }
        }

        backtracking([], 0, 0);
        return res;
    }
}
