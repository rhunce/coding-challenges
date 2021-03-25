/*
You're given a root node of a Binary Tree. Write a function that returns true if this Binary Tree is height balanced and false if it isn't.

A Binary Tree is height balanced if for each node in the tree, the difference between the height of its left subtree and the height of its right subtree is at most 1.
*/

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(isBalanced, height) {
    this.isBalanced = isBalanced;
    this.height = height;
  }
}

function heightBalancedBinaryTree(tree) {
  const treeInfo = getTreeInfo(tree);
  return treeInfo.isBalanced;
}
// Time Complexity: O(n)
// Space Complexity: O(h)

function getTreeInfo(node) {
  if (node === null) {
    return new TreeInfo(true, -1);
  }
  const leftSubtreeInfo = getTreeInfo(node.left);
  const rightSubtreeInfo = getTreeInfo(node.right);
  const isBalanced =
        leftSubtreeInfo.isBalanced &&
        rightSubtreeInfo.isBalanced &&
        Math.abs(leftSubtreeInfo.height - rightSubtreeInfo.height) <= 1;
  const height = Math.max(leftSubtreeInfo.height, rightSubtreeInfo.height) + 1;
  return new TreeInfo(isBalanced, height);
}