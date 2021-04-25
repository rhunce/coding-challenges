/*
Write a MinMaxStack class for a Min Max Stack. The class should support:

 - Pushing and popping values on and off the stack;
 - Peeking at the value at the top of the stack;
 - Getting both the minimum and the maximum values in the stack at any given point in time.

All class methods, when considered independently, should run in constant time and with constant space.
*/

class MinMaxStack {
  constructor() {
    this.stack = [];
    this.min = [];
    this.max = [];
    this.top = 0;
  }

  // O(1) time and space
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // O(1) time and space
  pop() {
    if (this.stack.length === 0) {
      return;
    }
    const lastElement = this.stack.pop();
    if (lastElement === this.min[this.min.length - 1]) {
      this.min.pop();
    }
    if (lastElement === this.max[this.max.length - 1]) {
      this.max.pop();
    }
    return lastElement;
  }

  // O(1) time and space
  push(number) {
    if (this.stack.length === 0) {
      this.min = [number];
      this.max = [number];
    } else {
      if (number >= this.max[this.max.length - 1]) {
        this.max.push(number);
      }
      if (number <= this.min[this.min.length - 1]) {
        this.min.push(number);
      }
    }
    this.stack.push(number);
  }

  // O(1) time and space
  getMin() {
    return this.min[this.min.length - 1];
  }

  // O(1) time and space
  getMax() {
    return this.max[this.max.length - 1];
  }
}

// SOURCE SOLUTION
class MinMaxStack {
  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }

  // O(1) time and space
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // O(1) time and space
  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  // O(1) time and space
  push(number) {
    const newMinMax = {
      min: number,
      max: number,
    };
    if (this.minMaxStack.length) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax.min = Math.min(lastMinMax.min, number);
      newMinMax.max = Math.max(lastMinMax.max, number);
    }
    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  // O(1) time and space
  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  // O(1) time and space
  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}
