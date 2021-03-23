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

// MY SOLUTION
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
// Space Complexity: O(1)