/*
Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.
An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.
Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.
Note that empty array and array of one element are monotonic.
*/

// My solution (20 min)
function isMonotonic(array) {
  if (array.length <= 1) {
		return true;
	}
	let differenceArray = [];
	for (let i = 0; i < array.length - 1; i++) {
		differenceArray.push(array[i + 1] - array[i]);
	}
	if (differenceArray.every(val => val <= 0) || differenceArray.every(val => val >= 0)) {
		return true;
	} else {
		return false;
	}
}
// Time Complexity: O(n)
// Space Complexity: O(n)

// My optimized solution (11 min)
function isMonotonic(array) {
	if (array.length <= 1) {
		return true;
	}
	const comparatorFunction1 = (val, i) => {
		if (i < array.length - 1) {
			return array[i + 1] - val <= 0;
		} else {
      return true;
    }
  }
	const comparatorFunction2 = (val, i) => {
		if (i < array.length - 1) {
			return array[i + 1] - val >= 0;
		} else {
      return true;
    }
	}
  if (array.every(comparatorFunction1) || array.every(comparatorFunction2)) {
		return true;
	} else {
		return false;
	}
}
// Time Complexity: O(n)
// Space Complexity: O(1)

// Source solution
function isMonotonic(array) {
  if (array.length <= 2) {
    return true;
  }
  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    if (breaksDirection(direction, array[i - 1], array[i])) {
      return false;
    }
  }
  return true;
}

function breaksDirection(direction, previousInt, currentInt) {
  const difference = currentInt - previousInt;
  if (direction > 0) {
    return difference < 0;
  }
  return difference > 0;
}
// Time Complexity: O(n)
// Space Complexity: O(1)

// Best solution
function isMonotonic(array) {
	let isIncreasing = true;
	let isDecreasing = true;
	for (let i = 1; i < array.length; i++) {
		if (array[i] - array[i - 1] < 0) {
			isIncreasing = false;
		}
		if (array[i] - array[i - 1] > 0) {
			isDecreasing = false;
		}
	}
	return isIncreasing || isDecreasing;
}
// Time Complexity: O(n)
// Space Complexity: O(1)