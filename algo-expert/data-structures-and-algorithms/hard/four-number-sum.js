/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all quadruplets in the array that sum up to the target sum and return a two-dimensional array of all these quadruplets in no particular order.

If no four numbers sum up to the target sum, the function should return an empty array.
*/

// BRUTE FORCE (8 min)
function fourNumberSum(array, targetSum) {
  const validQuadruplets = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        for (let l = k + 1; l < array.length; l++) {
          const currentSum = array[i] + array[j] + array[k] + array[l];
          if (currentSum === targetSum) {
            validQuadruplets.push([array[i], array[j], array[k], array[l]]);
          }
        }
      }
    }
  }
  return validQuadruplets;
}
// O(n^4) time | O(n) space

// SOURCE SOLUTION
function fourNumberSum(array, targetSum) {
  const allPairSums = {};
  const quadruplets = [];
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currentSum = array[i] + array[j];
      const difference = targetSum - currentSum;
      if (difference in allPairSums) {
        for (const pair of allPairSums[difference]) {
          quadruplets.push(pair.concat([array[i], array[j]]));
        }
      }
    }
    for (let k = 0; k < i; k++) {
      const currentSum = array[i] + array[k];
      if (!(currentSum in allPairSums)) {
        allPairSums[currentSum] = [[array[k], array[i]]];
      } else {
        allPairSums[currentSum].push([array[k], array[i]]);
      }
    }
  }
  return quadruplets;
}
// Average: O(n^2) time | O(n^2) space
// Worst: O(n^3) time | O(n^2) space
