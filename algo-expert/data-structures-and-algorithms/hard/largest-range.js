/*
Write a function that takes in an array of integers and returns an array of length 2 representing the largest range of integers contained in that array.

The first number in the output array should be the first number in the range, while the second number should be the last number in the range.

A range of numbers is defined as a set of numbers that come right after each other in the set of real integers. For instance, the output array [2, 6] represents the range {2, 3, 4, 5, 6}, which is a range of length 5. Note that numbers don't need to be sorted or adjacent in the input array in order to form a range.

You can assume that there will only be one largest range.
*/

// BRUTE FORCE APPROACH (30 min)
function largestRange(array) {
  array.sort((a, b) => a - b);
  let largestRangeSize = 0;
  let largestRange = [array[0], array[0]];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] - array[i] === 1) {
      const rangeInfo = getRangeInfo(array, i + 1);
      if (rangeInfo.lengthOfRange > largestRangeSize) {
        largestRangeSize = rangeInfo.lengthOfRange;
        largestRange = rangeInfo.rangeTuple;
      }
      i = i + rangeInfo.lengthOfRange - 1;
    }
  }
  return largestRange;
}
// O(n log n) time | O(1) space

function getRangeInfo(array, startingIndex) {
  let currentIndex = startingIndex;
  while (array[currentIndex + 1] - array[currentIndex] <= 1) {
    currentIndex++;
  }
  return {
    lengthOfRange: currentIndex - startingIndex + 2,
    rangeTuple: [array[startingIndex - 1], array[currentIndex]],
  };
}

// OPTIMAL SOLUTION (24 min)
function largestRange(array) {
  const integers = {};
  let largestRangeSize = 0;
  let largestRange;
  for (let i = 0; i < array.length; i++) {
    if (integers[array[i]] === undefined) {
      integers[array[i]] = array[i];
    }
  }
  const lowestInteger = Math.min(...array);
  const highestInteger = Math.max(...array);
  for (let i = lowestInteger; i < highestInteger; i++) {
    if (integers[i] !== undefined && integers[i + 1] !== undefined) {
      const rangeInfo = getRangeInfo(integers, i + 1);
      if (rangeInfo.lengthOfRange > largestRangeSize) {
        largestRangeSize = rangeInfo.lengthOfRange;
        largestRange = rangeInfo.rangeTuple;
      }
      i = i + rangeInfo.lengthOfRange - 1;
    }
  }
  return largestRange ? largestRange : [array[0], array[0]];
}
// O(n) time | O(n) space

function getRangeInfo(integers, startingIndex) {
  let currentIndex = startingIndex + 1;
  while (integers[currentIndex] !== undefined) {
    currentIndex++;
  }
  return {
    lengthOfRange: currentIndex - startingIndex + 1,
    rangeTuple: [integers[startingIndex - 1], integers[currentIndex - 1]],
  };
}

// SOURCE SOLUTION
function largestRange(array) {
  let bestRange = [];
  let longestLength = 0;
  const nums = {};
  for (const num of array) {
    nums[num] = true;
  }
  for (const num of array) {
    if (!nums[num]) continue;
    nums[num] = false;
    let currentLength = 1;
    let left = num - 1;
    let right = num + 1;
    while (left in nums) {
      nums[left] = false;
      currentLength++;
      left--;
    }
    while (right in nums) {
      nums[right] = false;
      currentLength++;
      right++;
    }
    if (currentLength > longestLength) {
      longestLength = currentLength;
      bestRange = [left + 1, right - 1];
    }
  }
  return bestRange;
}
