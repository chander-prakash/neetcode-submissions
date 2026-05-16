class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        let sortedAr = nums.sort((a,b) => a-b);
        let res = [];
        let concludedG = new Set();

        for (let i = 0; i < sortedAr.length; i++) {
            let x = sortedAr[i];
            let l = i+1, r = sortedAr.length - 1;

            while (l < r) {
                let sum = sortedAr[l] + sortedAr[r] + x;
                if (sum === 0) {
                    let key = `${x},${sortedAr[l]},${sortedAr[r]}`;
                    if (!concludedG.has(key)) {
                        res.push([x, sortedAr[l], sortedAr[r]]);
                        concludedG.add(key)
                    }
                }

                if (sum > 0) {
                    r--;
                } else {
                    sum < 0;
                    l++
                }
            }
        }
        return res;
    }
}
