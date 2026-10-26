class MinStack {
    stack: number[] = [];
    min: number;
    constructor() {
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.stack.length === 0) {
            this.stack.push(0);
            this.min = val;
        } else {
            this.stack.push(val - this.min)
            if (val < this.min) {
                this.min = val;
            }
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.stack.length === 0) {
            return
        }

        const popped = this.stack.pop();
        if (popped < 0) {
            this.min -= popped;
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        const top = this.stack[this.stack.length - 1];
        if (top > 0) {
            return top + this.min;
        } else {
            return this.min;
        }
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min;
    }
}
