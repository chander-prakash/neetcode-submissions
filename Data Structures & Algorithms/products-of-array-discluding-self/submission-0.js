class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        if (nums.length === 0 || nums.length === 1) return nums;
        
        let prLR = Array(nums.length).fill(0);
        prLR[0] = nums[0];

        let prRL = Array(nums.length).fill(0);
        prRL[nums.length - 1] = nums[nums.length - 1];

        for (let i = 1; i < nums.length; i++) {
            prLR[i] = nums[i]*prLR[i-1];
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            prRL[i] = nums[i]*prRL[i+1];
        }
        
        let res = Array(nums.length).fill(0);
        for (let i = 0; i < nums.length; i++) {

            if (i == 0) res[i] = prRL[i+1];
            else if (i == nums.length - 1) res[i] = prLR[i-1];
            else res[i] = prLR[i-1] * prRL[i+1];
        }

        return res;
    }

}
