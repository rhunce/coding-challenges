/*
Write a DoublyLinkedList class that has a head and a tail, both of which point to either a linked list Node or null. The class should support:

 - Setting the head and tail of the linked list;
 - Inserting nodes before and after other nodes as well as at given positions (the position of the head node is 1);
 - Removing given nodes and removing nodes with given values;
 - Searching for nodes with given values.

Note that the setHead, setTail, insertBefore, insertAfter, insertAtPosition, and remove methods all take in actual Nodes as input parameters - not integers (except for insertAtPosition, which also takes in an integer representing the position); this means that you don't need to create any new Nodes in these methods. The input nodes can be either stand-alone nodes or nodes that are already in the linked list. If they're nodes that are already in the linked list, the methods will effectively be moving the nodes within the linked list, so your code will have to defensively handle this scenario.

Each node has an integer value as well as a prev node and a next node, both of which can point to either another node or null.
*/

// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// MY 45 MIN ATTEMPT
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

// SOURCE SOLUTION
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  // O(1) time | O(1) space
  setTail(node) {
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  // O(1) time | O(1) space
  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  // O(1) time | O(1) space
  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  // O(p) time | O(1) space
  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head;
    let currentPosition = 1;
    while (node !== null && currentPosition++ !== position) node = node.next;
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

  // O(n) time | O(1) space
  removeNodesWithValue(value) {
    let node = this.head;
    while (node !== null) {
      const nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) this.remove(nodeToRemove);
    }
  }

  // O(1) time | O(1) space
  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  }

  // O(n) time | O(1) space
  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) node = node.next;
    return node !== null;
  }

  removeNodeBindings(node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
}
