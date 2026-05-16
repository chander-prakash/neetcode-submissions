class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }

    addWord(word) {
        let cur = this;

        for (let c of word) {
            if ( !(c in cur.children)) {
                cur.children[c] = new TrieNode();
            }
            cur = cur.children[c];
        }
        cur.isWord = true;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */

    
    findWords(board, words) {

        const root = new TrieNode();
        for (let word of words) {
            root.addWord(word);
        }
        
        let res = new Set();
        let visited = new Set();

        let ROWS = board.length;
        let COLS = board[0].length;

        const dfs = (r,c,node, word) => {
            if (
                r < 0 || r >= ROWS ||
                c < 0 || c >= COLS ||
                visited.has(`${r},${c}`) ||
                !(board[r][c] in node.children)
            ) {
                return;
            }

            visited.add(`${r},${c}`);
            node = node.children[board[r][c]];
            word += board[r][c];

            if (node.isWord) {
                res.add(word);
            }


            dfs(r+1,c, node, word);
            dfs(r-1,c, node, word);
            dfs(r,c+1, node, word);
            dfs(r,c-1, node, word);

            visited.delete(`${r},${c}`);
        }
    
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r,c,root, '');
            }
        }

        return Array.from(res);
    }
}

