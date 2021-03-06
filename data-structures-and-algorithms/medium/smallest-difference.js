/*
Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

Note that the absolute difference of the two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

You can assume that there will be only one pair of numbers with the smallest difference.
*/

// Initial solution
function smallestDifference(arrayOne, arrayTwo) {
  let smallestDifference = null;
	let smallestDifferencePair = null;
	for (let i = 0; i < arrayOne.length; i++) {
	  for (let j = 0; j < arrayTwo.length; j++) {
		  const currentAbsoluteDifference = Math.abs(arrayOne[i] - arrayTwo[j]);
			if (smallestDifference === null) {
			  smallestDifference = currentAbsoluteDifference;
				smallestDifferencePair = [arrayOne[i], arrayTwo[j]];
			} else if (currentAbsoluteDifference < smallestDifference) {
			  smallestDifference = currentAbsoluteDifference;
				smallestDifferencePair = [arrayOne[i], arrayTwo[j]]
			}
	  }
	}
	return smallestDifferencePair
}
// Time Complexity: O(n^2)
// Space Complexity: O(1)