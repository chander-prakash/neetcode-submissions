class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {

        let memo = {};

        const dfs = (i,j) => {

            if (j === t.length) return 1;

            if (i === s.length) return 0;

            let key = `${i},${j}`;

            if (memo[key] !== undefined) {
                return memo[key];
            }

            let count = 0;
            
            if (s[i] === t[j]) {
                // then I have two option
                // whether include this or exclude tjos
                count = dfs(i+1,j+1) + dfs(i+1,j);
            } else {
                count = dfs(i+1,j);
            }

            memo[key] = count;
            return count;
        }

        return dfs(0,0);
    }
}
