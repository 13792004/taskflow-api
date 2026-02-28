const repo = require('../repositories/queueRepository');

class QueueService {
  enqueue(task) { repo.enqueue(task); return task; }
  dequeue() { return repo.dequeue(); }
  peek() { return repo.peek(); }
}

module.exports = new QueueService();