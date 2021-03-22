/*
Write a function that takes in a Binary Search Tree (BST) and a positive integer k and returns the kth largest integer contained in the BST.

You can assume that there will only be integer values in the BST and that k is less than or equal to the number of nodes in the tree.

Also, for the purpose of this question, duplicate integers will be treated as distinct values. In other words, the second largest value in a BST containing values {5, 7, 7} will be 7, not 5.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property:

  - its value is strictly greater than the values of every node to its left;
  - its value is less than or equal to the values of every node to its right; and
  - its children are either valid BST nodes themselves or null.
*/

// MY SOLUTION
// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  let values = [];

  let bstTraverser = function(bst, collection) {
    if (bst !== null) {
      bstTraverser(bst.left, collection);
      collection.push(bst.value);
      bstTraverser(bst.right, collection);
    }
  }
  bstTraverser(tree, values)

  return values[values.length - k];
}
// Time Complexity: O(n)
// Space Complexity: O(n)

// MY REVISED SOLUTION
// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  let values = [];
  bstTraverser(tree, values);
  return values[values.length - k];
}

function bstTraverser (bst, collection) {
  if (bst !== null) {
    bstTraverser(bst.left, collection);
    collection.push(bst.value);
    bstTraverser(bst.right, collection);
  }
}
// Time Complexity: O(n)
// Space Complexity: O(n)

// OPTIMAL SOURCE SOLUTION
// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(numberOfNodesVisited, latestVisitedNodeValue) {
    this.numberOfNodesVisited = numberOfNodesVisited;
    this.latestVisitedNodeValue = latestVisitedNodeValue;
  }
}

function findKthLargestValueInBst(tree, k) {
  const treeInfo = new TreeInfo(0, -1);
  reverseInOrderTraverse(tree, k, treeInfo);
  return treeInfo.latestVisitedNodeValue;
}

function reverseInOrderTraverse(node, k, treeInfo) {
  if (node === null || treeInfo.numberOfNodesVisited >= k) { return; }

  reverseInOrderTraverse(node.right, k, treeInfo);
  if (treeInfo.numberOfNodesVisited < k) {
    treeInfo.numberOfNodesVisited++;
    treeInfo.latestVisitedNodeValue = node.value;
    reverseInOrderTraverse(node.left, k, treeInfo);
  }
}
// Time Complexity: O(h + k)
// Space Complexity: O(h)