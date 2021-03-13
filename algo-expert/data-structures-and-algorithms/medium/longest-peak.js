/*
Write a function that takes in an array of integers and returns the length of the longest peak in the array.

A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip (the highest value in the peak), at which point thet become strictly decreasing. At least three integers are required to form a peak.

For example, the integers 1, 4, 10, 2 for a peak, but the integers 4, 0, 10 don't and neither do the integers 1, 2, 2, 0. Similarly, the integers 1, 2, 3 don't form a peak because there aren't any strictly decreasing integers after the 3.
*/

// MY INCORRECT SOLUTION (1 hr)
function longestPeak(array) {
  let longestPeak = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] > array[i]) {
      let leftIndex = i;
      let midIndex = i;
      let rightIndex = i + 1;
      while (array[rightIndex] > array[midIndex]) {
        midIndex++;
        rightIndex++;
      }
      if (array[rightIndex] === array[midIndex]) {
        i = rightIndex;
        continue;
      }
      while (array[rightIndex] < array[midIndex]) {
        midIndex++;
        rightIndex++;
      }
      let potentialLongestPeak = rightIndex - leftIndex;
      if (potentialLongestPeak > longestPeak) {
        longestPeak = potentialLongestPeak;
      }
      i = midIndex;
    }
  }
  return longestPeak;
}

// SOURCE SOLUTION
function longestPeak(array) {
  let longestPeakLength = 0;
  let i = 1
  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i]
    if (!isPeak) {
      i++;
      continue;
    }
    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--;
    }
    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++;
    }
    const currentPeakLength = rightIdx - leftIdx - 1;
    longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
    i = rightIdx;
  }
  return longestPeakLength;
}
// Time Complexity: O(n)
// Space Complexity: O(1)