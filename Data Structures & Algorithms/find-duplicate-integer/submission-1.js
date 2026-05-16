class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

        for (let num of nums) {
            const idx = Math.abs(num) - 1;
            console.log(`logs:: idx`, idx);
            if (nums[idx] < 0) {
                // already visited;
                return Math.abs(num);
            }
            nums[idx] = nums[idx] * -1;
        }
        return -1;
    }
}
