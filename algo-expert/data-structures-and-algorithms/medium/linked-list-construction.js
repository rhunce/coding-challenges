/*

*/

// MY 45 MIN ATTEMPT
// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (node.prev !== null && node.next !== null) {
      const prevNode = node.prev;
      const nextNode = node.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      node.next = null;
      let headNode = this.head;
      headNode.next = node;
      node.prev = headNode;
      this.head = node;
    } else if (node.next !== null) {
      const nextNode = node.next;
      this.tail = nextNode;
      nextNode.prev = null;
      node.next = null;
      let headNode = this.head;
      headNode.next = node;
      node.prev = headNode;
      this.head = node;
    } else if ((node.prev === null) & (node.next === null)) {
      let headNode = this.head;
      headNode.next = node;
      node.prev = headNode;
      this.head = node;
    }
  }

  setTail(node) {
    if (node.prev !== null && node.next !== null) {
      const prevNode = node.prev;
      const nextNode = node.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      node.prev = null;
      let tailNode = this.tail;
      tailNode.prev = node;
      node.next = tailNode;
      this.tail = node;
    } else if (node.prev !== null) {
      const prevNode = node.prev;
      this.head = prevNode;
      prevNode.next = null;
      node.prev = null;
      let tailNode = this.tail;
      tailNode.prev = node;
      node.next = tailNode;
      this.tail = node;
    } else if ((node.prev === null) & (node.next === null)) {
      let tailNode = this.tail;
      tailNode.prev = node;
      node.next = tailNode;
      this.tail = node;
    }
  }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.
  }

  // position - integer representing position
  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
  }

  removeNodesWithValue(value) {
    // Write your code here.
  }

  remove(node) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (node === currentNode && currentNode === this.head) {
        this.head = currentNode.prev;
        this.head.next = null;
        currentNode.prev = null;
        break;
      } else if (node === currentNode && currentNode === this.tail) {
        this.tail = currentNode.next;
        this.tail.prev = null;
        currentNode.next = null;
        break;
      } else if (node === currentNode) {
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        currentNode.prev = null;
        currentNode.next = null;
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  containsNodeWithValue(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}
