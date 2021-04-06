/*
You're given three inputs, all of which are instances of an AncestralTree class that have an ancestor property pointing to their youngest ancestor. The first input is the top ancestor in an ancestral tree (i.e., the only instance that has no ancestor--its ancestor property points to null), and the other two inputs are descendants in the ancestral tree.

Write a function that returns the youngest common ancestor to the two descendants.

Note that a descendant is considered its own ancestor.
*/

// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

// MY BRUTE FORCE APPROACH
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  let descendantOneAncestorLine = [];
  let currentNodeOne = descendantOne;
  while (currentNodeOne !== null) {
    descendantOneAncestorLine.push(currentNodeOne);
    currentNodeOne = currentNodeOne.ancestor;
  }

  let descendantTwoAncestorLine = [];
  let currentNodeTwo = descendantTwo;
  while (currentNodeTwo !== null) {
    descendantTwoAncestorLine.push(currentNodeTwo);
    currentNodeTwo = currentNodeTwo.ancestor;
  }

  for (let i = 0; i < descendantOneAncestorLine.length; i++) {
    for (let j = 0; j < descendantTwoAncestorLine.length; j++) {
      if (descendantOneAncestorLine[i] === descendantTwoAncestorLine[j]) {
        return descendantOneAncestorLine[i];
      }
    }
  }

  return null;
}
// Time Complexity: O(n^2)
// Space Complexity: O(h)
// h = height of tree