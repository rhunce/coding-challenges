/*
Write a function that takes in a Binary Tree (where nodes have an additional pointer to their parent node) as well as a node contained in that tree and returns the given node's successor.

A node's successor is the next node to be visited (immediately after the given node) when travering its tree using the in-order tree-traversal technique. A node has no successor if it's the last node to be visited in the in-order traversal.

If a node has no successor, your function should return null.
*/

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// BRUTE FORCE SOLUTION (12 min)
function findSuccessor(tree, node) {
  let nodes = [];
  nodeCollector(tree, nodes);
  for (let i = 0; i < nodes.length; i++) {
    if (node === nodes[i]) {
      if (nodes[i + 1] !== null) {
        return nodes[i + 1];
      }
    }
  }
  return null;
}

function nodeCollector(binaryTree, collection) {
  if (binaryTree === null) {
    return;
  }
  nodeCollector(binaryTree.left, collection);
  collection.push(binaryTree);
  nodeCollector(binaryTree.right, collection);
}
// Time Complexity: O(n)
// Space Complexity: O(n)

// OPTIMAL SOURCE SOLUTION
function findSuccessor(tree, node) {
  if (node.right !== null) {
    return getLeftmostChild(node.right);
  }
  return getRightmostParent(node);
}
// Time Complexity: O(h)
// Space Complexity: O(1)

function getLeftmostChild(node) {
  let currentNode = node;
  while (currentNode.left !== null) {
    currentNode = currentNode.left;
  }
  return currentNode;
}

function getRightmostParent(node) {
  let currentNode = node;
  while (currentNode.parent !== null && currentNode.parent.right === currentNode) {
    currentNode = currentNode.parent;
  }
  return currentNode.parent;
}