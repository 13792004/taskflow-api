class Task {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.createdAt = new Date();
  }
}

module.exports = Task;
