class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListRepository {
  constructor() {
    this.head = null;
  }

  insert(task) {
    const node = new Node(task);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) current = current.next;
    current.next = node;
  }

  getAll() {
    const tasks = [];
    let current = this.head;
    while (current) {
      tasks.push(current.value);
      current = current.next;
    }
    return tasks;
  }

  findById(id) {
    let current = this.head;
    while (current) {
      if (current.value.id === id) return current.value;
      current = current.next;
    }
    return null;
  }

  deleteById(id) {
    if (!this.head) return false;

    if (this.head.value.id === id) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value.id === id) {
        current.next = current.next.next;
        return true;
      }
      current = current.next;
    }

    return false;
  }
}

module.exports = new LinkedListRepository();
