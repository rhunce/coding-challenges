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
// O(n^2) time | O(1) space

// MY IMPROVED, OPTIMAL SOLUTION (+7 min)
function mergeOverlappingIntervals(array) {
  array.sort((a, b) => {
    return a[0] - b[0];
  });
  for (let i = 0; i < array.length - 1; i++) {
    const currentInterval = array[i];
    const nextInterval = array[i + 1];
    if (currentInterval[1] >= nextInterval[0]) {
      const firstVal = currentInterval[0];
      const secondVal = Math.max(currentInterval[1], nextInterval[1]);
      array.splice(i, 1, [firstVal, secondVal]);
      array.splice(i + 1, 1);
      i--;
    }
  }
  return array;
}
// O(n log n) time | O(1) space

// SOURCE SOLUTION
function mergeOverlappingIntervals(intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];
  let currentInterval = sortedIntervals[0];
  mergedIntervals.push(currentInterval);

  for (const nextInterval of sortedIntervals) {
    const [_, currentIntervalEnd] = currentInterval;
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentIntervalEnd >= nextIntervalStart) {
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    } else {
      currentInterval = nextInterval;
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
}
// O(n log n) time | O(n) space
