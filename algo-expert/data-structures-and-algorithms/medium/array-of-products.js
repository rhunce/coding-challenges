/*
Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.

In other words, the value at output[i] is equal to the product of every number in the input array other than input[i]

Note that you're expected to solve this problem without using division.
*/

// NAIVE SOLUTION (5 min) (Source solution same as my solution, even though it states optimate time and space complexity are O(n) for both.)
function arrayOfProducts(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (j === i) {
        continue;
      }
      product *= array[j]
    }
    result.push(product);
  }
  return result;
}
// Time Complexity: O(n^2)
// Space Complexity: O(n)

// SOLUTION IF REMOVING THE NO-DIVISION CONSTRAINT
function arrayOfProducts(array) {
	// must address edge case where there's only one 0 in input array
  let totalProduct = 1;
  for (let i = 0; i < array.length; i++) {
    totalProduct *= array[i];
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
		if (array[i] === 0) {
			result.push(0);
		} else {
			result.push(totalProduct / array[i]);
		}
  }
  return result;
}
// Time Complexity: O(n)
// Space Complexity: O(n)

// OPTIMAL SOLUTION BASED ON SOURCE VIDEO
function arrayOfProducts(array) {
  let leftCumulativeProduct = [];
  let rightCumulativeProduct = [];
  let runningLeftCumulativeProduct = 1;
  let runningRightCumulativeProduct = 1;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    leftCumulativeProduct[i] = 1;
    rightCumulativeProduct[i] = 1;
  }
  for (let i = 0; i < array.length; i++) {
    leftCumulativeProduct[i] = runningLeftCumulativeProduct;
    runningLeftCumulativeProduct *= array[i]
  }
  for (let i = array.length - 1; i >= 0; i--) {
    rightCumulativeProduct[i] = runningRightCumulativeProduct;
    runningRightCumulativeProduct *= array[i]
  }
  for (let i = 0; i < array.length; i++) {
    result[i] = leftCumulativeProduct[i] * rightCumulativeProduct[i];
  }
  return result;
}
// Time Complexity: O(n)
// Space Complexity: O(n)