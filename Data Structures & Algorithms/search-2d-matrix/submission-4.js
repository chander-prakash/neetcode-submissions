class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        
        let rows = matrix.length;
        let cols = matrix[0].length;

        let targetRow = -1;

        // Step 1: Find correct row
        for (let i = 0; i < rows; i++) {

            if (
                target >= matrix[i][0] &&
                target <= matrix[i][cols - 1]
            ) {
                targetRow = i;
                break;
            }
        }

        // target cannot exist
        if (targetRow === -1) {
            return false;
        }

        // Step 2: Binary search inside row
        let l = 0;
        let r = cols - 1;

        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);
            let currentVal = matrix[targetRow][mid];

            if (currentVal == target) return true;

            if (currentVal > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
            
        }
        return false;
    }
}
