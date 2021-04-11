/*
Write a function that takes in the head of a Singly Linked List and an integer k and removes the kth node from the end of the list.

The removal should be done in place, meaning that the original data structure should be mutated (no new structure should be created).

Furthermore, the input head of the linked list should remain the head of the linked list after the removal is done, even if the head is the node that's supposed to be removed. In other words, if the head is the node that's supposed to be removed, your function should simply mutate its value and next pointer.

Note that your function doesn't need to return anything.

You can assume that the input Linked List will always have at least two nodes and, more specifically, at least k nodes.

Each LinkedList node has an integer value as well as a next property pointing to the next node in the list or to null if it's the tail of the list.
*/

// MY SOLUTION (23 min)
// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// I:
// head {object} - head of singly linked list
// k {number} - integer, kth node from end to be removed
function removeKthNodeFromEnd(head, k) {
  let currentNode = head;
  const nodeValues = [];
  while (currentNode !== null) {
    nodeValues.push(currentNode.value);
    currentNode = currentNode.next;
  }
  let count = k - 1;
  let currentIndex = nodeValues.length - 1;
  while (count > 0) {
    count--;
    currentIndex--;
  }
  const targetValue = nodeValues[currentIndex];
  let previousNode = null;
  let targetNode = head;
  while (targetNode.value !== targetValue) {
    previousNode = targetNode;
    targetNode = targetNode.next;
  }
  if (previousNode === null) {
    targetNode.value = targetNode.next.value;
    targetNode.next = targetNode.next.next;
  } else {
    previousNode.next = targetNode.next;
    targetNode.next = null;
  }
}
// O(n) time | O(n) space
