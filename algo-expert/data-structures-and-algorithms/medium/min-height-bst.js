/*
Write a function that takes in a non-empty sorted array of distinct integers, constructs a BST from the integers, and returns the root of the BST.

The function should minimize the height of the BST.

You've been provided with a BST class that you'll have to use to construct the BST.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property:

  - its value is strictly greater than the values of every node to its left;
  - its value is less than or equal to the values of every node to its right; and
  - its children are either valid BST nodes themselves or null.

A BST is valid if and only if all of its nodes are valid BST nodes.

Note that the BST class already has an insert method which you can use if you want.
*/

// MY SOLUTION (33 min)
function minHeightBst(array) {
  const middleIndex = Math.floor(array.length / 2);
  const middleElement = array[middleIndex];
  let root = new BST(middleElement);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex + 1);

  const bstBuilder = function(bst, leftArray, rightArray) {
    if (leftArray.length !== 0) {
      const middleIndex = Math.floor(leftArray.length / 2);
      const middleElement = leftArray[middleIndex];
      bst.insert(middleElement);
      const newLeftArray = leftArray.slice(0, middleIndex);
      const newRightArray = leftArray.slice(middleIndex + 1);
      bstBuilder(bst, newLeftArray, newRightArray);
    }
    if (rightArray.length !== 0) {
      const middleIndex = Math.floor(rightArray.length / 2);
      const middleElement = rightArray[middleIndex];
      bst.insert(middleElement);
      const newLeftArray = rightArray.slice(0, middleIndex);
      const newRightArray = rightArray.slice(middleIndex + 1);
      bstBuilder(bst, newLeftArray, newRightArray);
    }
  }
  bstBuilder(root, leftArray, rightArray);

  return root;
}
// Time Complexity: O(n log(n))
// Space Complexity: O(n)

// SOURCE SOLUTION 2
function minHeightBst(array) {
  return constructMinHeightBst(array, null, 0, array.length - 1);
}
function constructMinHeightBst(array, bst, startIdx, endIdx) {
  if (endIdx < startIdx) {
    return;
  }
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const newBstNode = new BST(array[midIdx]);
  if (bst === null) {
    bst = newBstNode;
  } else {
    if (array[midIdx] < bst.value) {
      bst.left = newBstNode;
      bst = bst.left;
    } else {
      bst.right = newBstNode;
      bst = bst.right;
    }
  }
  constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  constructMinHeightBst(array, bst, midIdx + 1, endIdx);
  return bst;
}
// Time Complexity: O(n)
// Space Complexity: O(n)

// SOURCE SOLUTION 3
function minHeightBst(array) {
  return constructMinHeightBst(array, 0, array.length - 1);
}
function constructMinHeightBst(array, startIdx, endIdx) {
  if (endIdx < startIdx) {
    return null;
  }
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const bst = new BST(array[midIdx]);
  bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
  bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
  return bst;
}
// Time Complexity: O(n)
// Space Complexity: O(n)


// ========================

// (provided)
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}