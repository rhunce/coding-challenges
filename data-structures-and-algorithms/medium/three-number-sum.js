/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a 2D array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, the function should return an empty array.
*/

// Naive/Brute Force Solution
function threeNumberSum(array, targetSum) {
	let triplets = [];
	for (let i = 0; i < array.length - 2; i++) {
		for (let j = i + 1; j < array.length - 1; j++) {
			for (let k = j + 1; k < array.length; k++) {
				if ((array[i] + array[j] + array[k]) === targetSum) {
					let triplet = [array[i], array[j], array[k]];
					triplet.sort((a, b) => { return a - b; });
					triplets.push(triplet);
				}
			}
		}
	}
	triplets.sort((a, b) => {
	  if (a[0] !== b[0]) {
		  return a[0] - b[0];
		} else if (a[1] !== b[1]) {
		  return a[1] - b[1];
		} else if (a[2] !== b[2]) {
		  return a[2] - b[2];
		} else {
		  return;
		}
	})
	return triplets;
}
// Time Complexity: O(n^3)
// Space Complexity: O(n)

// Test Case
const testArray = [12, 3, 1, 2, -6, 5, -8, 6];
const testTargetSum = 0;
threeNumberSum(testArray, testTargetSum);