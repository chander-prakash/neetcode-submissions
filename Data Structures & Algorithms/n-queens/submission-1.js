class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {

        let board = Array.from({length: n}, () => Array(n).fill('.'));
        let cols = new Set();
        let diag = new Set();
        let antiDiag = new Set();


        let resp = [];

        const backtrack = (row) => {

            if (row === n) {
                // we reached the last cell, all the queens placed
                const copy = board.map(
                    r => r.join("")
                );

                resp.push(copy);
                return;

                // let copy = board.map((r) => r.join(''));
                // resp.push(copy);
                // return;
            }

            for (let col = 0; col < n; col++) {

                // check if we can place here otherwise continue;
                if (
                    cols.has(col) ||
                    diag.has(row - col) ||
                    antiDiag.has(row + col)
                ) {
                    continue;
                }

                board[row][col] = 'Q';
                cols.add(col);
                diag.add(row-col);
                antiDiag.add(row+col);

                backtrack(row + 1);

                // backtrack if we're not able to place all queen

                board[row][col] = '.';
                cols.delete(col);
                diag.delete(row - col);
                antiDiag.delete(row + col);


            }

        }

        backtrack(0);
        return resp;

    }
}
