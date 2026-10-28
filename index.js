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

  contains(value) {
    if (this.head === null) {
      return false;
    }

    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }

      current = current.nextNode;
    }

    return false;
  }

  findIndex(value) {
    if (this.head === null) {
      return -1;
    }

    let current = this.head;

    for (let counter = 0; current !== null; counter++) {
      if (current.value !== value) {
        current = current.nextNode;
      } else {
        return counter;
      }
    }

    return -1;
  }

  toString() {
    if (this.head === null) {
      return "";
    }
    let current = this.head;
    let result = "";
    while (current !== null) {
      let stringForm = `( ${current.value} )`;
      result += stringForm;
      if (current.nextNode !== null) {
        result += ` -> `;
      }
      current = current.nextNode;
    }
    result += `null`;
    return result;
  }

  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw new RangeError("Index must be in the boundaries");
    }

    if (values.length === 0) return;

    let firstNewNode = new Node(values[0]);
    let lastNewNode = firstNewNode;

    for (let i = 1; i < values.length; i++) {
      let newNode = new Node(values[i]);
      lastNewNode.nextNode = newNode;
      lastNewNode = newNode;
    }

    if (index === 0) {
      lastNewNode.nextNode = this.head;
      this.head = firstNewNode;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
      }

      lastNewNode.nextNode = current.nextNode;
      current.nextNode = firstNewNode;
    }
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export { LinkedList };