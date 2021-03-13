/*
Given an array of integers between 1 and n, inclusive, where n is the length of the array, write a function that returns the first integer that appears more than once (when the array is read from left to right).

In other words, out of all the integers that might occur more than once in the input array, your function should return the one whose first duplicate value has the minimum index.

If no integer appears more than once, your function should return -1.

Note that you're allowed to mutate the input array.
*/

// MY INITIAL SOLUTION (30 min)
function firstDuplicateValue(array) {
  let cache = {};
  for (let i = 0; i < array.length; i++) {
    if (cache[array[i]] === undefined) {
      cache[array[i]] = false;
    } else if (cache[array[i]] === false) {
      cache[array[i]] = true;
    }
  }
  let result = -1;
  let currentValue = null;
  let lastIndex = Number.POSITIVE_INFINITY;
  for (let key in cache) {
    if (cache[key] === true) {
      currentValue = parseInt(key);
      let count = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] === currentValue && count === 0) {
          count++;
        } else if (array[i] === currentValue && count === 1) {
          if (i < lastIndex) {
            lastIndex = i;
            result = currentValue;
            break;
          }
        }
      }
    }
  }
  return result;
}
// Time Complexity: O(n^2)
// Space Complexity: O(n)

// MY OPTIMIZED SOLUTION (optimized for time, not for space)
function firstDuplicateValue(array) {
  let cache = {};
  for (let i = 0; i < array.length; i++) {
    if (cache[array[i]] === undefined) {
      cache[array[i]] = false;
    } else if (cache[array[i]] === false) {
      cache[array[i]] = [true, i];
    }
  }
  let result = -1;
  let potentialResults = [];
  for (let key in cache) {
    if (cache[key][0] === true) {
      potentialResults.push([parseInt(key), cache[key][1]]);
    }
  }
  let firstRepeatedIndex = Number.POSITIVE_INFINITY;
  for (let i = 0; i < potentialResults.length; i++) {
    if (potentialResults[i][1] < firstRepeatedIndex) {
      firstRepeatedIndex = potentialResults[i][1];
      result = potentialResults[i][0];
    }
  }
  return result;
}

// MY CLEANED UP OPTIMIZED SOLUTION (optimized for time, not for space)
function firstDuplicateValue(array) {
  let cache = {};
  for (let i = 0; i < array.length; i++) {
    if (cache[array[i]] === undefined) {
      cache[array[i]] = 'seenAlready';
    } else if (cache[array[i]] === 'seenAlready') {
      return array[i];
    }
  }
  return -1;
}
// Time Complexity: O(n)
// Space Complexity: O(n)

// BRUTE FORCE SOURCE SOLUTION
function firstDuplicateValue(array) {
  let minimumSecondIndex = array.length;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const valueToCompare = array[j];
      if (value === valueToCompare) {
        minimumSecondIndex = Math.min(minimumSecondIndex, j)
      }
    }
  }
  if (minimumSecondIndex === array.length) {
    return -1;
  }
  return array[minimumSecondIndex];
}
// Time Complexity: O(n^2)
// Space Complexity: O(n)

// OPTIMAL SOURCE SOLUTION
function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[Math.abs(array[i]) - 1] < 0) {
      return Math.abs(array[i]);
    } else {
      array[Math.abs(array[i]) - 1] *= -1;
    }
  }
  return -1;
}
// Time Complexity: O(n)
// Space Complexity: O(1)