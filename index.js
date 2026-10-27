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

  prepend(value) {
    let newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    if (this.head === null) {
      return 0;
    }

    let current = this.head;
    let total = 0;

    while (current !== null) {
      total++;
      current = current.nextNode;
    }

    return total;
  }

  head() {
    if (this.head === null) return;

    return this.head;
  }

  
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
