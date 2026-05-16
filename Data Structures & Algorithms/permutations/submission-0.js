class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {

        let res = [];

        let used = Array(nums.length).fill(false);

        const backtracking = (current) => {

            if (current.length === nums.length) {
                res.push([...current]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (used[i]) continue;

                used[i] = true;
                current.push(nums[i]);
                backtracking(current);

                used[i] = false;
                current.pop();
            }
        };

        backtracking([]);
        return res;
    }
}
