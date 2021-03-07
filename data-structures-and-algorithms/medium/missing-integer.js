/*
Find the smallest positive integer that does not occur in a given sequence.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

// Solution 1 (Brute Force)
// Time Complexity: O(n log n) - Due to sorting
// Space Complexity: O(1) - Sorting in-place
function solution(A) {
  if (A.length === 1) {
    if (A[0] === 1) {
      return 2;
    } else {
      return 1;
    }
  }
  A.sort((a, b) => a - b)
  for (let i = 0; i < A.length; i++) {
      const currentElementGreaterThanOrEqualToZero = A[i] >= 0;
      const nextElementNotEqualToCurrentElement = A[i + 1] !== A[i];
      const nextElementNotEqualToCurrentElementPlusOne = A[i + 1] !== A[i] + 1;
      if (currentElementGreaterThanOrEqualToZero &&
          nextElementNotEqualToCurrentElement &&
          nextElementNotEqualToCurrentElementPlusOne) {
          return A[i] + 1;
      }
  }
  return 1;
}

// Test Cases:
let A = [-28, 90, 1, 0, 4, 24];
console.log(solution(A)); // 2

let B = [-28];
console.log(solution(B)); // 1

let C = [0];
console.log(solution(C)); // 1

let D = [28];
console.log(solution(D)); // 1

let E = [1];
console.log(solution(E)); // 2