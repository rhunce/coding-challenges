/*
Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.
An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.
Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.
Note that empty array and array of one element are monotonic
*/

// My solution
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