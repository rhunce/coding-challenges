/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.
*/

// MY SOLUTION 1
function twoNumberSum(array, targetSum) {
  const integers = {};

  for (let i = 0; i < array.length; i++) {
    const numberWeNeed = targetSum - array[i];
    if (integers[numberWeNeed] !== undefined) {
      return [integers[numberWeNeed], array[i]];
    }
    integers[array[i]] = array[i];
  }

  return [];
}
// O(n) time | O(n) space

// MY SOLUTION 2
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  while (leftIndex < rightIndex) {
    const currentSum = array[leftIndex] + array[rightIndex];
    if (currentSum > targetSum) {
      rightIndex--;
      continue;
    }
    if (currentSum < targetSum) {
      leftIndex++;
      continue;
    }
    return [array[leftIndex], array[rightIndex]];
  }
  return [];
}
// O(n log n) time | O(1) space
