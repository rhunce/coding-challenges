/*
Given a 6x6 2D Array, arr.
There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6x6.

Function Description
Complete the function hourglassSum in the editor below.
hourglassSum has the following parameter(s):
int arr[6][6]: an array of integers

Returns
int: the maximum hourglass sum
*/

function hourglassSum(arr) {
  let maxSum = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length - 2; i++) {
      for (let j = 0; j < arr[i].length - 2; j++) {
          let currentSum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
          if (currentSum > maxSum) {
              maxSum = currentSum;
          }
      }
  }
  return maxSum;
}