const { v4: uuid } = require('uuid');
const Task = require('../models/Task');
const repo = require('../repositories/linkedListRepository');

class BacklogService {
  createTask(title) {
    const task = new Task(uuid(), title);
    repo.insert(task);
    return task;
  }

  getAll() { return repo.getAll(); }
  getById(id) { return repo.findById(id); }
  delete(id) { return repo.deleteById(id); }
}

module.exports = new BacklogService();
