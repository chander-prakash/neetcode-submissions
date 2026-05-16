class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        let ROWS = matrix.length;
        let COLS = matrix[0].length;

        const DP = Array.from({length: ROWS}, () => Array(COLS).fill(0));

         const directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ];


        const dfs = (r,c) => {
            if (DP[r][c]) return DP[r][c];

            let longest = 1;

            for (let [dr, dc] of directions) {
                let newR = dr + r;
                let newC = dc + c;
                
                // check if new Directions are in bound
                if (
                    newR >= 0 && newR < ROWS &&
                    newC >= 0 && newC < COLS &&
                    matrix[newR][newC] > matrix[r][c]
                ) {
                    longest = Math.max(longest, 1 + dfs(newR, newC));
                }
            }

            DP[r][c] = longest;

            return longest;
        }


        let result = 0;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                result = Math.max(result, dfs(r,c));
            }
        }
        return result;

    }
}
