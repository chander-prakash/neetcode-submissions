class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set();
        let l = 0, r = 0;
        let longestSub =0;

        while (r < s.length) {
            let char = s[r];

            while (charSet.has(char)) {
                charSet.delete(s[l]);
                l++;
            }
            charSet.add(char);
            longestSub = Math.max(longestSub, r - l +1);
            r++;
        }

        return longestSub;
    }
}
