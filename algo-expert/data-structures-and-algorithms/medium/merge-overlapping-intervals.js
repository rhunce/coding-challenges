/*
Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals in no particular order.

Each interval is an array of two integers, with interval[0] as the start of the interval and interval[1] as the end of the interval.

Note that back-to-back intervals aren't considered overlapping. For example, [1, 5] and [6, 7] are not overlapping; however, [1, 6] and [6, 7] are indeed overlapping.

Also note that the start of any particular interval will always be less that or equal to the end of that interval.
*/

// MY SOLUTION (19 min)
function mergeOverlappingIntervals(array) {
  array.sort((a, b) => {
    return a[0] - b[0];
  });
  for (let i = 0; i < array.length - 1; i++) {
    let wasMerged = false;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i][1] >= array[j][0]) {
        const firstVal = array[i][0];
        const secondVal = Math.max(array[i][1], array[j][1]);
        array.splice(i, 1, [firstVal, secondVal]);
        array.splice(j, 1);
        j--;
        wasMerged = true;
      }
    }
    if (wasMerged) {
      i--;
    }
  }
  return array;
}
// O(n^2) time | O(n) space

// SOURCE SOLUTION
