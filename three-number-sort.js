/*
You're given an array or integers and another array of three distinct integers. The first array is guarenteed to only contain integers that are in the second array, and the second array represents a desired order for the integers in the first array. For example, a second array of [x, y, z] represents a desired order of [x, x, ..., x, y, y, ..., y, z, z, ..., z] in the first array.

Write a function that sorts the first array according to the desired order in the second array.

The function should perform this in place (i.e. it should mutate the input array), and it shouldn't use any auxiliary space (it should run in constant space complexity, O(1)).

Note that the desired order won't necessarily be ascending or descending and that the first array won't necessarily contain all three integers found in the second array -- it might contain only one or two.
*/

// MY INITIAL SOLUTION
function threeNumberSort(array, order) {
  for (let i = 0; i < order.length; i++) {
    let endOfIteration = array.length;
    for (let j = 0; j < endOfIteration; j++) {
      if (array[j] === order[i]) {
        array.push(array.splice(j, 1)[0]);
        j--;
        endOfIteration--;
      }
    }
  }
  return array;
}
// O(n * m^2) time | O(1) space

// MY IMPROVED SOLUTION
function threeNumberSort(array, order) {
  let currentIndex = 0;
  for (let i = 0; i < order.length; i++) {
    for (let j = currentIndex; j < array.length; j++) {
      if (array[j] === order[i]) {
        let temp = array[currentIndex];
        array[currentIndex] = array[j];
        array[j] = temp;
        currentIndex++;
      }
    }
  }
  return array;
}
// O(n * m) time | O(1) space

// MY MORE IMPROVED SOLUTION
function threeNumberSort(array, order) {
  let currentBegIndex = 0;
  let currentEndIndex = array.length - 1;
  for (let i = 0; i < currentEndIndex + 1; i++) {
    if (array[i] === order[0]) {
      let temp = array[i];
      array[i] = array[currentBegIndex];
      array[currentBegIndex] = temp;
      currentBegIndex++;
    } else if (array[i] === order[2]) {
      let temp = array[i];
      array[i] = array[currentEndIndex];
      array[currentEndIndex] = temp;
      i--;
      currentEndIndex--;
    }
  }
  return array;
}
// O(n) time | O(1) space

// SOURCE SOLUTION
function threeNumberSort(array, order) {
  const valueCounts = [0, 0, 0];
  for (const element of array) {
    const orderIdx = order.indexOf(element);
    valueCounts[orderIdx]++;
  }

  for (let idx = 0; idx < 3; idx++) {
    const value = order[idx];
    const count = valueCounts[idx];

    const numElementsBefore = valueCounts
      .slice(0, idx)
      .reduce((a, b) => a + b, 0);
    for (let n = 0; n < count; n++) {
      const currentIdx = numElementsBefore + n;
      array[currentIdx] = value;
    }
  }

  return array;
}
// O(n) time | O(1) space
