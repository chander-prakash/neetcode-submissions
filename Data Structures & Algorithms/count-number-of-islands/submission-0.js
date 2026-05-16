class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        const visited = new Set();

        let count = 0;


        let ROWS = grid.length;
        let COLS = grid[0].length;

        const searchIsland = (r,c) => {

            if (
                r < 0 || r >= ROWS ||
                c < 0 || c >= COLS ||
                visited.has(`${r},${c}`) ||
                grid[r][c] == '0'
            ) {
                return 0;
            }

            visited.add(`${r},${c}`);

            searchIsland(r+1,c);
            searchIsland(r-1,c);
            searchIsland(r,c+1);
            searchIsland(r,c-1);


        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] == '1' &&  !visited.has(`${r},${c}`)) {
                    count++;
                    searchIsland(r,c);
                }
            }
        }
        return count;
    }
}
