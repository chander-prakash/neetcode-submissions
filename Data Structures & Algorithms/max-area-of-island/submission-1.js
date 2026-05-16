class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {

        let ROWS = grid.length;
        let COLS = grid[0].length;
        const visited = new Set();


        let maxArea = 0;

        const dfs = (r,c) => {
            if (
                r < 0 || r >= ROWS ||
                c < 0 || c >= COLS || 
                visited.has(`${r},${c}`) ||
                grid[r][c] == '0'
            ) {
                return 0;
            }

            visited.add(`${r},${c}`);

            const area = 1+ dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1);

            return area;
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] == 1 && !visited.has(`${r},${c}`)) {
                    maxArea = Math.max(maxArea, dfs(r,c));
                }
            }
        }

        return maxArea;
    }
}
