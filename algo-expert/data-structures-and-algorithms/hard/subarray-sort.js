/*
Write a function that takes in an array of at least two integers and returns an array of the starting and ending indices of the smallest subarray in the input array that needs to be sorted in place in order for the entire array to be sorted (in ascending order).

If the input array is already sorted, the function should return [-1, -1].
*/

// BRUTE FORCE SOLUTION
function subarraySort(array) {
  let leftIndex = -1;
  let rightIndex = -1;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        leftIndex = i;
        break;
      }
    }
    if (leftIndex !== -1) {
      break;
    }
  }

  for (let i = array.length - 1; i >= 1; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > array[i]) {
        rightIndex = i;
        break;
      }
    }
    if (rightIndex !== -1) {
      break;
    }
  }

  return [leftIndex, rightIndex];
}
// O(n^2) time | O(1) space
