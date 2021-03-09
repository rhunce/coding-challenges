/*
Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

Function Description
Complete the function rotLeft in the editor below.
rotLeft has the following parameter(s):
int a[n]: the array to rotate
int d: the number of rotations

Returns
int a'[n]: the rotated array
*/

function rotLeft(a, d) {
  let neededRotations = d % a.length;
  let rotatedArray = [];
  for (let i = neededRotations; i < a.length; i++) {
    rotatedArray.push(a[i]);
  }
  for (let i = 0; i < neededRotations; i++) {
    rotatedArray.push(a[i]);
  }
  return rotatedArray;
}