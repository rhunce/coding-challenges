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

// SOURCE SOLUTION 1
function powerset(array, idx = null) {
  if (idx === null) {
    idx = array.length - 1;
  }
  if (idx < 0) {
    return [[]];
  }
  const ele = array[idx];
  const subsets = powerset(array, idx - 1);
  const length = subsets.length;
  for (let i = 0; i < length; i++) {
    const currentSubset = subsets[i];
    subsets.push(currentSubset.concat(ele));
  }
  return subsets;
}
// O(n*2^n) time | O(n*2^n) space

// SOURCE SOLUTION 2
function powerset(array, idx = null) {
  const subsets = [[]];
  for (const ele of array) {
    const length = subsets.length;
    for (let i = 0; i < length; i++) {
      const currentSubset = subsets[i];
      subsets.push(currentSubset.concat(ele));
    }
  }
  return subsets;
}
// O(n*2^n) time | O(n*2^n) space
