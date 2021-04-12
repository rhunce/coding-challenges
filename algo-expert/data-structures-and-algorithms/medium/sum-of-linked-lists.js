/*
You're given two Linked Lists of potentially unequal length. Each Linked List represents a non-negative integer, where each node in the Linked List is a digit of that integer, and the first node in each Linked List always represents the least significant digit of that integer. Write a function that returns the head of a new Linked List that represents the sum of the integers represented by the two input Linked Lists.

The value of each LinkedList node is always in the range of 0 - 9.

Note: Your function must create a new Linked List, and you're not allowed to modify either of the input Linked Lists.
*/

// MY SOLUTION (44 min)
// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const ll1StringedNums = [];
  putNumsInArr(linkedListOne, ll1StringedNums);
  const ll2StringedNums = [];
  putNumsInArr(linkedListTwo, ll2StringedNums);
  let ll1NumValue = convertToNumber(ll1StringedNums);
  let ll2NumValue = convertToNumber(ll2StringedNums);
  const stringedSum = (ll1NumValue + ll2NumValue).toString();
  const linkedListsSum = createdLinkedList(stringedSum);
  return linkedListsSum;
}
// Time complexity: O(n + m) | Space complexity: O(n + m)

function putNumsInArr(linkedList, array) {
  let currentNode = linkedList;
  while (currentNode !== null) {
    array.push(currentNode.value.toString());
    currentNode = currentNode.next;
  }
}

function convertToNumber(stringedNumsArray) {
  return parseInt(stringedNumsArray.reverse().join(''));
}

function createdLinkedList(stringedInteger) {
  let headNode = null;
  let currentNode = null;
  for (let i = stringedInteger.length - 1; i >= 0; i--) {
    console.log(stringedInteger[i], i);
    if (i === stringedInteger.length - 1) {
      currentNode = new LinkedList(parseInt(stringedInteger[i]));
      headNode = currentNode;
    } else {
      currentNode.next = new LinkedList(parseInt(stringedInteger[i]));
      currentNode = currentNode.next;
    }
  }
  return headNode;
}
