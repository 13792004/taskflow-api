class StackRepository {
  constructor() {
    this.stack = [];
  }

  push(a) { this.stack.push(a); }
  pop() { return this.stack.pop() || null; }
  peek() { return this.stack[this.stack.length - 1] || null; }
}

module.exports = new StackRepository();