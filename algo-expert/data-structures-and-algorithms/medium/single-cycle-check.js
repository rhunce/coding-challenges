/*
You're given an array of integers where each integer represents a jump of its value in the array. For instance, the integer 2 represents a jump of two indices forward in the array; the integer -3 represents a jump of three indices backward in the array.

If a jump spills past the array's bounds, it wraps over to the other side. For instance, a jump of -1 at index 0 brings us to the last index in the array. Similarly, a jump of 1 at the last index in the array brings us to index 0.

Write a function that return a boolean representing whether the jumps in the array form a single cycle. A single cycle occurs if, starting at any index in the array and following the jumps, every elements in the array is visited exactly once before landing back on the starting index.
*/

// MY INCOMPLETE SOLUTION
function hasSingleCycle(array) {
  let nextIndex = array[0];
  let currentIndex = 0;
  array[0] = true;
  let count = array.length - 1;
  while (count > 0) {
    if (array[nextIndex] === true) {
      return false;
    }
    currentIndex = nextIndex;
    // LIKELY NEED TO MAKE ADJUSTMENTS TO THE BELOW IF-ELSE BLOCK
    if (array[currentIndex] + currentIndex < 0) {
      nextIndex = (Math.abs(array[currentIndex]) % array.length) + currentIndex;
    } else {
      nextIndex = nextIndex + array[nextIndex];
    }
    array[currentIndex] = true;
    count--;
  }
  if (nextIndex === 0) {
    return true;
  }
  return false;
}

// SOURCE SOLUTION
function hasSingleCycle(array) {
  let numElementsVisited = 0;
  let currentIdx = 0;
  while (numElementsVisited < array.length) {
    if (numElementsVisited > 0 && currentIdx === 0) {
      return false;
    }
    numElementsVisited++;
    currentIdx = getNextIdx(currentIdx, array);
  }
  return currentIdx === 0;
}
// Time Complexity: O(n)
// Space Complexity: O(1)

function getNextIdx(currentIdx, array) {
  const jump = array[currentIdx];
  const nextIdx = (currentIdx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}