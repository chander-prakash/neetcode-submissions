class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = new Map();
        for (let str of strs) {
            const key = str.split('').sort().join('');
            if (!hashMap.has(key)) hashMap.set(key, []);
            hashMap.set(key, [...hashMap.get(key), str]);
        }

        return [...hashMap.values()];

    }
}
