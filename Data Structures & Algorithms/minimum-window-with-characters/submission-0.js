class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */


    minWindow(s, t) {

        const tCount = {};
        const windowCount = {};

        for (let c of t) {
            tCount[c] = (tCount[c] || 0) + 1
        }

        let need = Object.keys(tCount).length;
        let have = 0;
        let res = [-1,-1];
        let resLen = Infinity;


        let l = 0;

        for (let r = 0; r < s.length; r++) {
            let char = s[r];
            windowCount[char] = (windowCount[char] || 0) + 1;

            if (tCount[char] && windowCount[char] === tCount[char]) {
                have++;
            }

            while (have === need) {

                if ((r-l+1) < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }

                windowCount[s[l]]--;

                if (
                    tCount[s[l]] &&
                    windowCount[s[l]] < tCount[s[l]]
                ) {
                    have--;
                }

                l++;
            }
        }

        let [start, end] = res;
        return resLen === Infinity ? "" : s.slice(start, end + 1);

    }
}
