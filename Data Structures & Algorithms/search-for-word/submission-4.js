class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {

        let visited = new Set();
        let ROWs = board.length, COLs = board[0].length;

        let directions = [
            [1,0], // top
            [-1,0], // bottom
            [0,1], // right
            [0,-1] // left
        ];

        const dfs = (r,c,index) => {

            if (index === word.length) {
                return true;
            }

            if (
                r < 0 || r >= ROWs ||
                c < 0 || c >= COLs ||
                board[r][c] !== word[index] ||
                visited.has(`${r},${c}`)
            ) {
                return false;
            }

            visited.add(`${r},${c}`);

            for (let [dr, dc] of directions) {
                if (dfs(r + dr, c + dc, index+1)) {
                    return true;
                }
            }



            visited.delete(`${r},${c}`);
            return false;
        }


        for (let r = 0; r < ROWs; r++) {
            for (let c = 0; c < COLs; c++) {
                if (dfs(r,c, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
