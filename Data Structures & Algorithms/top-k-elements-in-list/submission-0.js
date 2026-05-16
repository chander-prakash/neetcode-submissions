class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let countMap = {};

        for (const num of nums) {
            countMap[num] = (countMap[num] || 0) + 1;
        }

        const arr = Object.entries(countMap).map(([num, freq]) => {
            return [freq, parseInt(num)];
        });

        arr.sort((a,b) => b[0] - a[0]);

        return arr.slice(0,k).map((pair) => pair[1]);

    }
}
