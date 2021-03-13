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
// Time Complexity: O(n)
// Space Complexity: O(n)