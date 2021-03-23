/*
The pre-order traversal of a Binary Tree is a traversal technique that starts at the tree's root node and visits nodes in the following order:

- Current Node
- Left Subtree
- Right Subtree

Given a non-empty array of integers representing the pre-order traversal of a Binary Search Tree (BST), write a function that creates the relevant BST and returns its root node.

The input array will contain the values of BST nodes in the order in which these nodes would be visited with a pre-order traversal.
*/

class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// SOURCE SOLUTION
function reconstructBst(preOrderTraversalValues) {
  if (preOrderTraversalValues.length === 0) {
    return null;
  }
  const currentValue = preOrderTraversalValues[0];
  let rightSubtreeRootIdx = preOrderTraversalValues.length;
  for (let idx = 1; idx < preOrderTraversalValues.length; idx++) {
    const value = preOrderTraversalValues[idx];
    if (value >= currentValue) {
      rightSubtreeRootIdx = idx;
      break;
    }
  }
  const leftSubtree = reconstructBst(preOrderTraversalValues.slice(1, rightSubtreeRootIdx));
  const rightSubtree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx));
  return new BST(currentValue, leftSubtree, rightSubtree);
}

// Time Complexity: O(n^2)
// Space Complexity: O(n)

// OPTIMAL SOURCE SOLUTION
class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}

function reconstructBst(preOrderTraversalValues) {
  const treeInfo = new TreeInfo(0);
  return reconstructBstFromRange(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, preOrderTraversalValues, treeInfo);
}

function reconstructBstFromRange(lowerBound, upperBound, preOrderTraversalValues, currentSubtreeInfo) {
  if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length) {
    return null;
  }

  const rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
  if (rootValue < lowerBound || rootValue >= upperBound) {
    return null;
  }

  currentSubtreeInfo.rootIdx++;
  const leftSubtree = reconstructBstFromRange(lowerBound, rootValue, preOrderTraversalValues, currentSubtreeInfo);
  const rightSubtree = reconstructBstFromRange(rootValue, upperBound, preOrderTraversalValues, currentSubtreeInfo);
  return new BST(rootValue, leftSubtree, rightSubtree);
}
// Time Complexity: O(n)
// Space Complexity: O(n)