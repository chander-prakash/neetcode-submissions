class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];

        let visited = new Set();

        const findCombination = (currentIndex, currentPair, t) => {
            if (t == 0) {
                let key = currentPair.sort((a,b) => a - b).join(',');
                if (visited.has(key)) {
                    return;
                }

                res.push(currentPair);
                visited.add(key);
                return;
                
            }

            if (t < 0) return;

            for (let i = 0; i < nums.length; i++) {
                if (t >= nums[i]) {
                    findCombination(i, [...currentPair, nums[i]], t-nums[i]);
                }
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (target >= nums[i]) {
                findCombination(i, [nums[i]], target-nums[i]);
            }
        }

        
        return res;
    }
}
