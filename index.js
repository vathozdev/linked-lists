class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = new Node(value);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
