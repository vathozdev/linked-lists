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

  tail() {
    if (this.head === null) return;

    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    if (index < 0) {
      return;
    }

    if (this.head === null) {
      return;
    }

    let counter = 0;
    let current = this.head;

    for (; counter < index && current !== null; counter++) {
      current = current.nextNode;
    }

    if (current === null) {
      return;
    }

    return current.value;
  }

  pop() {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    this.head = current.nextNode;

    return current.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
