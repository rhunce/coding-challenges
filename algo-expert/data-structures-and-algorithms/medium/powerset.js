/*
Write a function that takes in an array of unique integers and returns its powerset.

The powerset P(X) of a set X is the set of all subsets of X. For example, the powerset of [1,2] is [[],[1],[2],[1,2]].

Note that the sets in the powerset do not need to be in any particular order.
*/

// MY SOLUTION (34 min)
function powerset(array) {
  const allSubsets = [[]];
  getAllSubsets(array, allSubsets);
  return allSubsets;
}
// O(?) time | O(?) space

function getAllSubsets(
  integersArray,
  subsetsArray,
  subset = [],
  startingIndex = 0
) {
  if (startingIndex >= integersArray.length) {
    return;
  }
  for (let i = startingIndex; i < integersArray.length; i++) {
    subset.push(integersArray[i]);
    let newSubset = subset.slice();
    subsetsArray.push(newSubset);
    getAllSubsets(integersArray, subsetsArray, subset, i + 1);
    subset.pop();
  }
}
