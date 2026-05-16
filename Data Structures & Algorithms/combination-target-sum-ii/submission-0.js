class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {

       let res = [];
       candidates = candidates.sort((a,b) => a-b);

        const backtrack = (start, current, remaining) => {

            if (remaining == 0) {
                res.push([...current]);
                return;
            }

            if (remaining < 0) {
                return false;
            }

            for (let i = start; i < candidates.length; i++) {
                // if i > start means 2nd iteration and duplicate continue;
                if (i > start && candidates[i] === candidates[i-1]) {
                    continue;
                }

                if (candidates[i] > remaining) break;

                current.push(candidates[i]);
                backtrack(i+1, current, remaining - candidates[i]);
                current.pop();
            }
        }
        
        backtrack(0, [], target);
        return res;

    }
}
 