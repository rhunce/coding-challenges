/*
Write a function that takes in a potentially invalid Binary Search Tree (BST) and returns a boolean representing whether the BST is valid.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valied BST nodes themselves or null.

A BST is valid if and only if all of its nodes are valid BST nodes.
*/

// MY INCORRECT SOLUTION ATTEMPT (passes some but not all tests) (1 hr)
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  // consider edge cases
  if (typeof tree.value !== 'number') {
    return false;
  }
  if (tree.left === null && tree.right === null && typeof tree.value === 'number') {
    return true;
  }

  const checkNodes = (node, closestLeftParent = null, closestRightParent = null) => {
    if (node.left !== null && node.left.value >= node.value) {
      return false;
    } else if (node.left !== null) {
      checkNodes(node.left, closestLeftParent, node);
    }
    if (node.right !== null && node.right.value < node.value) {
      return false;
    } else if (node.right !== null) {
      checkNodes(node.right, node, closestRightParent);
    }
  }
  checkNodes(tree);

  return true;
}

// SOURCE SOLUTION
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  return validateBstHelper(tree, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
}
// Time Complexity: O(n)
// Space Complexity: O(d)
// d = depth of tree

function validateBstHelper(tree, minValue, maxValue) {
  if (tree === null) {
    return true;
  }
  if (tree.value < minValue || tree.value >= maxValue) {
    return false;
  }
  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
}