/*
Write a function that takes in an array of positive integers and returns the maximum sum of non-adjacent elements in the array. If the input array is empty, the function should return 0.
*/

// MY ATTEMPT
function maxSubsetSumNoAdjacent(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];
  if (array.length === 2) {
    if (array[0] > array[1]) {
      return array[0]
    } else {
      return array[1];
    }
  }
  let newArray = [];
  newArray[0] = array[0];
  newArray[1] = array[1]; // this is where the error is. Should be max of array[0] and array[1]
  for (let i = 2; i < array.length; i++) {
    let firstSum = newArray[i - 2] + array[i];
    let secondSum = newArray[i - 1];
    if (firstSum > secondSum) {
      newArray[i] = firstSum;
    } else {
      newArray[i] = secondSum;
    }
  }
  return newArray[newArray.length - 1];
}

// SOURCE SOLUTION 1
function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  const maxSums = array.slice();
  maxSums[1] = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
  }
  return maxSums[maxSums.length - 1];
}
// Time Complexity: O(n)
// Space Complexity: O(n)

// SOURCE SOLUTION 2
function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  let second = array[0];
  let first = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    const current = Math.max(first, second + array[i]);
    second = first;
    first = current;
  }
  return first;
}
// Time Complexity: O(n)
// Space Complexity: O(1)