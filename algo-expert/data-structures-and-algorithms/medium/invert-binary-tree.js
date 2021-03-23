/*
Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.
*/

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// MY SOLUTION (13 min)
function invertBinaryTree(tree) {
  let node = tree;
  while (node !== null) {
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    invertBinaryTree(node.left);
    invertBinaryTree(node.right);
    break;
  }
  return tree;
}
// Time Complexity: O(n)
// Space Complexity: O(h)

// SOURCE SOLUTION 1
function invertBinaryTree(tree) {
  const queue = [tree];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === null) {
      continue;
    }
    swapLeftAndRight(current);
    queue.push(current.left);
    queue.push(current.right);
  }
  return tree;
}
// Time Complexity: O(n)
// Space Complexity: O(n)

function swapLeftAndRight(tree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}

// SOURCE SOLUTION 2
function invertBinaryTree(tree) {
  if (tree === null) {
    return;
  }
  swapLeftAndRight(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
  return tree;
}
// Time Complexity: O(n)
// Space Complexity: O(h)

function swapLeftAndRight(tree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}
