class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        let i = 0;
        let operands = ['+', '-', '*', '/'];

        while (i < tokens.length) {
            if (operands.includes(tokens[i])) {
                let [n2, n1] = [stack.pop(), stack.pop()];
                [n1, n2] = [Number(n1), Number(n2)];
                switch (tokens[i]) {
                    case '+': 
                        stack.push(n2 + n1);
                        break;
                    case '-': 
                        stack.push(n1 - n2);
                        break;
                    case '*': 
                        stack.push(n2 * n1);
                        break;
                    case '/': 
                        stack.push(Math.trunc(n1 / n2));
                        break;
                }
            } else {
                stack.push(tokens[i]);
            }
            i++;
        }
        return stack[0];
    }
}
