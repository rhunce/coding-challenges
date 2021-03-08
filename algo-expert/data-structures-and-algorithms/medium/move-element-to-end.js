/*
You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.
*/

// My initial solution (11 min)
function moveElementToEnd(array, toMove) {
	for (let i = array.length - 1; i >= 0; i--) {
		if (array[i] === toMove) {
			array.splice(i, 1);
			array.push(toMove);
		}
	}
	return array
}
// Time Complexity: O(N^2)
// Space Complexity: O(1)

// My optimized solution, seeing I could achieve better time complexity (25 min)
function moveElementToEnd(array, toMove) {
	let endIndex = array.length - 1;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === toMove) {
			for (let j = endIndex; j >= 0; j--) {
        endIndex = j;
				if ((array[j] !== toMove) && i < j) {
					let leftValue = array[i];
					let rightValue = array[j];
					array[i] = rightValue;
					array[j] = leftValue;
					endIndex = j - 1;
					break;
				}
			}
			if (i >= endIndex) {
				break;
			}
		}
	}
	return array;
}
// Time Complexity: O(N)
// Space Complexity: O(1)

// Source solution
function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) {
			j--;
		}
    if (array[i] === toMove) {
			swap(i, j, array);
		}
    i++;
  }
  return array;
}
// Time Complexity: O(N)
// Space Complexity: O(1)