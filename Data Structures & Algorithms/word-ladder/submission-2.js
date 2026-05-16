class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {

        let queue = [[beginWord, 1]];
        const visitedWord = new Set();
        visitedWord.add(beginWord);
        const wordSet = new Set(wordList);
        if (!wordSet.has(endWord)) return 0;
        
        while (queue.length) {

            let [word, currentCount] = queue.shift();
            if (word === endWord) return currentCount;

            for (let i = 0; i < word.length; i++) {
            
                for (let c = 97; c <= 122; c++) {
            
                    let replaceChar = String.fromCharCode(c);
                    let wordArr = word.split('');
                    wordArr[i] = replaceChar;
                    let newWord = wordArr.join('');
                    
                    if (!wordSet.has(newWord)) continue;
                    if (visitedWord.has(newWord)) continue;
                    
                    visitedWord.add(newWord);
                    queue.push([newWord, currentCount+1]);

                }
            }
        }

        return 0;

    }
}
