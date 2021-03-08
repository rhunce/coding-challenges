/*
Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

Note that the absolute difference of the two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

You can assume that there will be only one pair of numbers with the smallest difference.
*/

// Initial solution (18 min)
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

// Optimal Solution (1 hr 40 min)
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => { return a - b; });
	arrayTwo.sort((a, b) => { return a - b; });
	let left = 0;
	let right = 0;
	let currentSmallestSum = Number.POSITIVE_INFINITY;
	let currentSmallestSumPair;
	while (left !== undefined || right !== undefined) {
		if (Math.abs(arrayOne[left] - arrayTwo[right]) < currentSmallestSum) {
      currentSmallestSum = Math.abs(arrayOne[left] - arrayTwo[right]);
      currentSmallestSumPair = [arrayOne[left], arrayTwo[right]];
    }
    if (arrayOne[left] < arrayTwo[right] && (arrayOne[left + 1] !== undefined)) {
      left++;
    } else if (arrayOne[left] > arrayTwo[right] && (arrayTwo[right + 1] !== undefined)) {
      right++;
    } else {
      break;
    }
	}
	return currentSmallestSumPair
}

// Optimal Solution from Source
function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
	let idxOne = 0;
	let idxTwo = 0;
	let smallest = Number.POSITIVE_INFINITY;
	let current = Number.POSITIVE_INFINITY;
	let smallestPair = [];
	while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
		let firstNum = arrayOne[idxOne];
		let secondNum = arrayTwo[idxTwo];
		if (firstNum < secondNum) {
			current = secondNum - firstNum;
			idxOne++;
		} else if (secondNum < firstNum) {
			current = firstNum - secondNum;
			idxTwo++;
		} else {
			return [firstNum, secondNum];
		}
		if (smallest > current) {
			smallest = current;
			smallestPair = [firstNum, secondNum];
		}
	}
	return smallestPair;
}

// Time Complexity: O(n*log(n) + m*log(m))
// Space Complexity: O(1)