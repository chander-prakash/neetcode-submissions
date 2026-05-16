class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = [];
        nums = nums.sort((a,b) => a-b);

        const backtracking = (start, current) => {
            res.push([...current]);

            for (let i = start; i < nums.length; i++) {
                if (i > start && nums[i] === nums[i-1]) {
                    continue;
                }
                
                current.push(nums[i]);
                backtracking(i+1, current);
                current.pop();
            }
        }

        backtracking(0, []);
        return res;
    }
    
}
