class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {

        /**
         * 
         * [1,2] [3]
         * [1,2,3]
         * [1,2,3,4]
         * / i + i -1 
         * -2,-1,3
         */

        let res = [...nums1, ...nums2].sort((a,b) => a-b);
        let n = res.length;
        let med = Math.floor(n/2);
        console.log(`logs::: med : ${med}, n: ${n}`, res);
        
        if (n%2 == 0) {
            let half = n / 2;
            return (res[half-1] + res[half]) / 2;
        }
        return res[med];
        
        
    }
}
