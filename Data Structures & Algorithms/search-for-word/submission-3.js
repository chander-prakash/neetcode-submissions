class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {


        const ROWS = board.length;
        const COLS = board[0].length;
        
        let visited = new Set();
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        const dfs = (r,c, index) => {
            
            if (index === word.length) {
                return true;
            }

            if (
                r < 0 || r >= ROWS ||
                c < 0 || c >= COLS ||
                board[r][c] !== word[index] ||
                visited.has(`${r},${c}`)
            ) {
                return false;
            }

            visited.add(`${r},${c}`);
            for (let [dr, dc] of directions) {
                if (dfs(dr+r,dc+c, index+1)){
                    return true
                }
            }
            visited.delete(`${r},${c}`);
            return false;
        }
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (dfs(i,j, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
}
