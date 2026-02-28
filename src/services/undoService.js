const Action = require('../models/Action');
const repo = require('../repositories/stackRepository');

class UndoService {
  push(desc) {
    const action = new Action(desc);
    repo.push(action);
    return action;
  }

  pop() { return repo.pop(); }
  peek() { return repo.peek(); }
}

module.exports = new UndoService();
