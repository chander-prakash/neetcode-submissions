class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length - 1;
        let maxArea = 0;

        while (l < r) {
            let height = Math.min(heights[l], heights[r]);
            let area = height * (r-l);
            maxArea = Math.max(maxArea, area);

            if (heights[l] < heights[r]) l++;
            else r--;

        }

        return maxArea;
    }
}
