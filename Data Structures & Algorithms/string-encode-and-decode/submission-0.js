class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';

        for (let s of strs) {
            res += `${s.length}#${s}`;
        }
        
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];

        let i = 0;
        
        while (i < str.length) {
            let char = '';
            while (str[i] !== '#') {
                char += str[i];
                i++;
            }
            char = parseInt(char);
            res.push(str.substr(i+1,char));
            i = i + char + 1;
        }

        return res;
    }
}
