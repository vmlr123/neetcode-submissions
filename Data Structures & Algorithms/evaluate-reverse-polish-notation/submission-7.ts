class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let result: number = 0;
        let stack: number[] = [];
        const operands = ['+', '-', '*', '/'];

        if (tokens.length === 1) {
            return Number(tokens[0]);
        }

        for (let token of tokens) {
            if (Number.isFinite(Number(token))) {
                stack.push(Number(token));
            } else if (operands.includes(token)){
                if (token === '+') {
                    stack[stack.length - 2] += stack[stack.length -1];
                } else if (token === '-') {
                    stack[stack.length - 2] -= stack[stack.length -1];
                } else if (token === '*') {
                    stack[stack.length - 2] *= stack[stack.length - 1];
                } else if (token === '/' && ((Number.isInteger(stack[stack.length - 2]) && (Number.isInteger(stack[stack.length - 1]))))) {
                    stack[stack.length - 2] = Math.trunc(stack[stack.length - 2] / stack[stack.length - 1]);
                } else {
                    stack[stack.length - 2] /= stack[stack.length - 1]
                }
                result = stack[stack.length - 2];
                if (stack.length > 1) {
                    stack.pop();
                } else {
                    stack = [result];
                }

            }
        }

        return result;
    }
}