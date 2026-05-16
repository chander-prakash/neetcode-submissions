class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        // we're gonna use deque:
        let deque = [];
        let res = [];

        for (let i = 0; i < nums.length; i++) {
            
            // remove outside window values
            if (deque.length > 0 && deque[0] <= (i - k)) {
                deque.shift();
            }

            // maintain decreaseing order
            while (
                deque.length &&
                nums[deque[deque.length-1]] < nums[i]
            ) {

                // []
                deque.pop();
            }

            deque.push(i);

            if ( i >= k - 1) {
                // window formed
                res.push(nums[deque[0]]);
            }
        }

        return res;
    }
}
