class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

         // rows
        for (let r = 0; r < 9; r++) {
            let seen = new Set();

            for (let c = 0; c < 9; c++) {
                let val = board[r][c];

                if (val === '.') continue;

                if (seen.has(val)) return false;

                seen.add(val);
            }
        }

        // cols
        for (let c = 0; c < 9; c++) {
            let seen = new Set();

            for (let r = 0; r < 9; r++) {
                let val = board[r][c];

                if (val === '.') continue;

                if (seen.has(val)) return false;

                seen.add(val);
            }
        }


        let n = board.length;
        let positions = [
            [0,0],[0,1],[0,2],
            [1,0],[1,1],[1,2],
            [2,0],[2,1],[2,2]
        ];
        for (let r = 0; r < n; r += 3) {
            for (let c = 0; c < n; c += 3) {
                let visited = new Set();
                for (let [x,y] of positions) {
                    let nR = r + x, nC = c + y;
                    let val = board[nR][nC];
                    if (visited.has(val)) return false;
                    if (val === '.') continue;
                    visited.add(val);

                }
            }   
        }
        return true;
    }
}
