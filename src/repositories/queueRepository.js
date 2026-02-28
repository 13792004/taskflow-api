class QueueRepository {
  constructor() {
    this.queue = [];
  }

  enqueue(t) { this.queue.push(t); }
  dequeue() { return this.queue.shift() || null; }
  peek() { return this.queue[0] || null; }
}

module.exports = new QueueRepository();
