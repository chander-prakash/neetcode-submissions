class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    matches(a, b) {
            for (let i = 0; i < 26; i++) {
                if (a[i] !== b[i]) return false;
            }
            return true;
    }



    checkInclusion(s1, s2) {

        let s1Count = Array(26).fill(0)
        let windowCount = Array(26).fill(0);

        for (let s of s1) {
            s1Count[s.charCodeAt(0) - 97]++
        }

        let l = 0;
        for (let r = 0; r < s2.length; r++) {

            // increase window count
            windowCount[s2[r].charCodeAt(0) - 97]++
        
            //  reduce window to match s1 length
            if ((r -l + 1) > s1.length) {
                windowCount[s2[l].charCodeAt(0) - 97]--;
                l++;
            }

            if (this.matches(s1Count, windowCount)) {
                return true;
            }
            
        }

        return false;

    }
}
