/*
Write a function that takes in an n X m 2-D array (can be square shaped when n === m) and returns a 1-D array of all the array's elements in spiral order.

Spiral order starts at the top left corner of the 2-D array, goes to the right, and proceeds in a spiral pattern all the way until every element has been visited.
*/

// My initial solution
function spiralTraverse(array) {
  let result = [];

  const spiralTraverser = function(arr) {
    const n = arr[0].length;

    // Remove top elements
    for (let i = 0; i < n; i++) {
      result.push(arr[0].shift());
    }

    // Remove right elements
    for (let i = 1; i < arr.length; i++) {
      result.push(arr[i].pop());
    }

    // Remove bottom elements
    for (let i = arr[arr.length - 1].length - 1; i >= 0; i--) {
      result.push(arr[arr.length - 1].pop());
    }

    // Remove left elements
    if (arr.length > 2) {
      for (let i = arr.length - 2; i >= 1; i--) {
        result.push(arr[i].shift());
      }
    }

    // Get rid of empty subarrays
    const m = arr.length - 1;
    for (let i = m; i >= 0; i--) {
      if (arr[i].length === 0) {
        arr.splice(i, 1);
      }
    }

    // If stuff left, recursively call inner function with remaining array of arrays
    if (arr.length > 0) {
      spiralTraverser(arr);
    }
  }
  spiralTraverser(array);

  // Remove any undefined elements from result array
  for (let i = 0; i < result.length; i++) {
    if (result[i] === undefined) {
      result.splice(i, 1);
      i--;
    }
  }

	return result;
}
// Time Complexity: O(n^2)
// Space Complexity: O(n)