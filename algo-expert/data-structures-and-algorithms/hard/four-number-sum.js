/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all quadruplets in the array that sum up to the target sum and return a two-dimensional array of all these quadruplets in no particular order.

If no four numbers sum up to the target sum, the function should return an empty array.
*/

// BRUTE FORCE
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
