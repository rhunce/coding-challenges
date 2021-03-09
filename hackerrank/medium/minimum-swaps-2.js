/*
You are given an unordered array consisting of consecutive integers in the set [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

Function Description
minimumSwaps has the following parameter(s):
arr: an unordered array of integers

Output Format
Return the minimum number of swaps to sort the given array.
*/

function minimumSwaps(arr) {
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] === i + 1) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          swaps++;
          break;
        }
      }
    }
  }
  return swaps;
}