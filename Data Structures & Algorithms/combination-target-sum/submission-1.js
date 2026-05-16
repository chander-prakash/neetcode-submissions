class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        let res = [];

        const backtrack = (i, current, remaining) => {

            if (remaining == 0) {
                res.push([...current]);
                return;
            }

            if (remaining < 0 || i >= nums.length) {
                return false;
            }

            current.push(nums[i]);
            backtrack(i, current, remaining - nums[i]);
            current.pop();
            backtrack(i+1, current, remaining);
        }
        
        backtrack(0, [], target);
        return res;

    }
}
