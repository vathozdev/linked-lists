class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
