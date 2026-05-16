class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let maxP = Array(height.length).fill(0);
        let maxS = Array(height.length).fill(0);

        let maxL = height[0];
        let maxR = height[height.length - 1];

        for (let i = 0; i < height.length; i++) {
            maxP[i] = Math.max(maxL,height[i]);
            maxL = Math.max(maxL,height[i]);
        }

        for (let i = height.length -1; i >= 0; i--) {
            maxS[i] = Math.max(maxR,height[i]);
            maxR = Math.max(maxR,height[i]);
        }

        let total = 0;

        for (let i = 0; i < height.length; i++) {
            let p = (maxP[i-1] || 0);
            let s = (maxS[i+1] || 0);

            let waterTrap = Math.min(p,s) - height[i];
            total += (waterTrap > 0 ? waterTrap : 0);
            
        }

        return total;
        
    }
}
