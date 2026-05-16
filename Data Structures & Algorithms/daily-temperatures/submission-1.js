class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        
        // deque

        
        let len = temperatures.length;
        let res = Array(len).fill(0);

        let deque = [len-1];

        let i = len - 2;

        /**
         [6]



         * 
         */
        

        while (i >= 0) {

            let curr = temperatures[i];

            while (
                deque.length > 0 &&
                curr >= temperatures[deque[deque.length - 1]]
            ) {
                deque.pop();
            }

            let wid = 0;
            if (deque.length) {
                wid = deque[deque.length - 1] - i; // index of that value
            }
            res[i] = wid;
            deque.push(i);
            i--;
        }

        return res;

    }
}
