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

// MY OPTIMIZED SOLUTION USING HINTS
function subarraySort(array) {
  let largestOutOfPlaceValue = Number.NEGATIVE_INFINITY;
  let smallestOutOfPlaceValue = Number.POSITIVE_INFINITY;

  for (let i = 0; i < array.length - 1; i++) {
    const first = array[i];
    const second = array[i + 1];
    if (first > second) {
      if (first > largestOutOfPlaceValue) {
        largestOutOfPlaceValue = first;
        largestOutOfPlaceIndex = i;
      }
      if (second < smallestOutOfPlaceValue) {
        smallestOutOfPlaceValue = second;
        smallestOutOfPlaceIndex = i + 1;
      }
    }
  }

  let leftIndex = -1;
  let rightIndex = -1;
  for (let i = 0; i < array.length; i++) {
    if (smallestOutOfPlaceValue < array[i]) {
      leftIndex = i;
      break;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (largestOutOfPlaceValue < array[i]) {
      rightIndex = i - 1;
      break;
    }
  }

  if (leftIndex !== -1 && rightIndex === -1) {
    rightIndex = array.length - 1;
  }

  return [leftIndex, rightIndex];
}
// O(n) time | O(1) space

// SOURCE SOLUTION
function subarraySort(array) {
  let minOutOfOrder = Number.POSITIVE_INFINITY;
  let maxOutOfOrder = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num);
    }
  }
  if (minOutOfOrder === Number.POSITIVE_INFINITY) {
    return [-1, -1];
  }
  let subarrayLeftIdx = 0;
  while (minOutOfOrder >= array[subarrayLeftIdx]) {
    subarrayLeftIdx++;
  }
  let subarrayRightIdx = array.length - 1;
  while (maxOutOfOrder <= array[subarrayRightIdx]) {
    subarrayRightIdx--;
  }
  return [subarrayLeftIdx, subarrayRightIdx];
}

function isOutOfOrder(i, num, array) {
  if (i === 0) return num > array[i + 1];
  if (i === array.length - 1) return num < array[i - 1];
  return num > array[i + 1] || num < array[i - 1];
}
