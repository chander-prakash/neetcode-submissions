class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        
        let freqMap = {};
        let l = 0;
        let maxFreq = 0;
        let longestFreq = 0;

        for (let r= 0; r < s.length; r++) {
            let char = s[r];
            freqMap[char] = (freqMap[char] || 0) + 1;
            maxFreq = Math.max(maxFreq, freqMap[char]);

            while (((r - l + 1) - maxFreq) > k) {
                freqMap[s[l]] -= 1;
                l++;
            }

            longestFreq = Math.max(longestFreq, r - l + 1);
        }

        return longestFreq;
    }
}
