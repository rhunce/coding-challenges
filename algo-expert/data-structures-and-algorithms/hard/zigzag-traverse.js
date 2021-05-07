/*
Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n === m) and returns a one-dimensional array of all the array's elements in zigzag order.

Zigzag order starts at the top left corner of the two-dimensional array, goes down by one element, and proceeds in a zigzag pattern all the way to the bottom right corner.
*/

// MY SOLUTION (37 min)
function zigzagTraverse(array, startRow = 0, startCol = 0, result = []) {
  if (startRow === 0 && startCol === 0) {
    result.push(array[startRow][startCol]);
  }
  if (startRow === array.length - 1 && startCol === array[0].length - 1) {
    return result;
  }

  let currentRow = startRow;
  let currentCol = startCol;

  // go down one if posible, else go right one if poosible
  if (
    array[currentRow + 1] !== undefined &&
    array[currentRow + 1][currentCol] !== undefined
  ) {
    result.push(array[currentRow + 1][currentCol]);
    currentRow++;
  } else if (
    array[currentRow] !== undefined &&
    array[currentRow][currentCol + 1] !== undefined
  ) {
    result.push(array[currentRow][currentCol + 1]);
    currentCol++;
  }
  // go all the way up-right
  while (
    array[currentRow - 1] !== undefined &&
    array[currentRow - 1][currentCol + 1] !== undefined
  ) {
    result.push(array[currentRow - 1][currentCol + 1]);
    currentRow--;
    currentCol++;
  }

  // go right one if poosible, else go down one if poosible
  if (
    array[currentRow] !== undefined &&
    array[currentRow][currentCol + 1] !== undefined
  ) {
    result.push(array[currentRow][currentCol + 1]);
    currentCol++;
  } else if (
    array[currentRow + 1] !== undefined &&
    array[currentRow + 1][currentCol] !== undefined
  ) {
    result.push(array[currentRow + 1][currentCol]);
    currentRow++;
  }

  // go all the way down-left
  while (
    array[currentRow + 1] !== undefined &&
    array[currentRow + 1][currentCol - 1] !== undefined
  ) {
    result.push(array[currentRow + 1][currentCol - 1]);
    currentRow++;
    currentCol--;
  }

  zigzagTraverse(array, currentRow, currentCol, result);

  return result;
}
// O(n) time | O(n) space
