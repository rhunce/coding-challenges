/*
Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by summing up all of the integers in a non-empty subarray of the input array. A subarray must only contain adjacent numbers (numbers next to each other in the input array).
*/

// MY BRUTE FORCE SOLUTION
function kadanesAlgorithm(array) {
  let maxSum = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      let subArray = array.slice(i, j + 1)
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let currentSum = subArray.reduce(reducer);
      if (currentSum > maxSum) {
        maxSum = currentSum;
        result = subArray;
      }
    }
  }
  return maxSum;
}
// Time Complexity: O(n^2)...maybe O(n^3) since slice nested in doubly nested loop?
// Space Complexity: O(n)

// SOURCE SOLUTION
function kandanesAlgorithm(array) {
  let maxEndingHere = array[0];
  let maxSoFar = array[0];
  for (let i = 1; i < array.length; i++) {
    const num = array[i];
    maxEndingHere = Math.max(num, maxEndingHere + num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}
// Time Complexity: O(n)
// Space Complexity: O(1)