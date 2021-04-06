/*
You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only 0's and 1's. The matrix represents a two-toned image, where each 1 represents black and each 0 represents white. An island is defined as any number of 1's that are horizontally or vertically adjacent (but not diagonally adjacent) and that don't touch the border of the image. In other words, a group of horizontally or vertically adjacent 1's isn't an island if any of those 1's are in the first row, first column, last row, or last column of the input matrix.

Note that an island can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for example.

You can think of islands as patches of black that don't touch the border of the two-toned image.

Write a function that returns a modified version of the input matrix, where all of the islands are removed. You remove an island by replacing it with 0's. Naturally, you're allowed to mutate the input matrix.
*/

// MY SOLUTION ATTEMPT. INFINITE LOOP ERROR. (50 min)
function removeIslands(matrix) {
  let visitedTracker = [];
  for (let i = 0; i < matrix.length; i++) {
    visitedTracker[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      visitedTracker[i].push(false);
    }
  }

  // iterate over first row
  for (let i = 0; i < matrix[0].length; i++) {
    if (visitedTracker[0][i] === false && matrix[0][i] === 0) {
      visitedTracker[0][i] = true;
    } else if (visitedTracker[0][i] === false && matrix[0][i] === 1) {
      visitPeninsula(0, i, visitedTracker, matrix);
    }
  }

  // iterate over last row
  for (let i = 0; i < matrix[0].length; i++) {
    let lastRowIdx = matrix.length - 1;
    if (
      visitedTracker[lastRowIdx][i] === false &&
      matrix[lastRowIdx][i] === 0
    ) {
      visitedTracker[lastRowIdx][i] = true;
    } else if (
      visitedTracker[lastRowIdx][i] === false &&
      matrix[lastRowIdx][i] === 1
    ) {
      visitPeninsula(lastRowIdx, i, visitedTracker, matrix);
    }
  }

  // iterate over first col
  for (let i = 1; i < matrix.length - 1; i++) {
    if (visitedTracker[i][0] === false && matrix[i][0] === 0) {
      visitedTracker[i][0] = true;
    } else if (visitedTracker[i][0] === false && matrix[i][0] === 1) {
      visitPeninsula(i, 0, visitedTracker, matrix);
    }
  }

  // iterate over last col
  for (let i = 1; i < matrix.length - 1; i++) {
    let lastColIdx = matrix[0].length - 1;
    if (
      visitedTracker[i][lastColIdx] === false &&
      matrix[i][lastColIdx] === 0
    ) {
      visitedTracker[i][lastColIdx] = true;
    } else if (
      visitedTracker[i][lastColIdx] === false &&
      matrix[i][lastColIdx] === 1
    ) {
      visitPeninsula(i, lastColIdx, visitedTracker, matrix);
    }
  }

  // iterate over inside of matrix and remove islands
  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix[0].length - 1; j++) {
      if (visitedTracker[i][j] === false && matrix[i][j] === 0) {
        visitedTracker[i][j] = true;
      } else if (visitedTracker[i][j] === false && matrix[i][j] === 1) {
        removeIsland(i, j, visitedTracker, matrix);
      }
    }
  }

  return matrix;
}

function visitPeninsula(startRow, startCol, visitedTracker, inputMatrix) {
  console.log(startRow, startCol);
  visitedTracker[(startRow, startCol)] = true;
  if (
    inputMatrix[startRow - 1] !== undefined &&
    visitedTracker[startRow - 1][startCol] !== true &&
    inputMatrix[startRow - 1][startCol] === 1
  ) {
    visitPeninsula(startRow - 1, startCol, visitedTracker, inputMatrix);
  }
  if (
    inputMatrix[startRow + 1] !== undefined &&
    visitedTracker[startRow + 1][startCol] !== true &&
    inputMatrix[startRow + 1][startCol] === 1
  ) {
    visitPeninsula(startRow + 1, startCol, visitedTracker, inputMatrix);
  }
  if (
    inputMatrix[startRow][startCol - 1] === 1 &&
    visitedTracker[startRow][startCol - 1] !== true
  ) {
    visitPeninsula(startRow, startCol - 1, visitedTracker, inputMatrix);
  }
  if (
    inputMatrix[startRow][startCol + 1] === 1 &&
    visitedTracker[startRow][startCol + 1] !== true
  ) {
    visitPeninsula(startRow, startCol + 1, visitedTracker, inputMatrix);
  }
}

function removeIsland(startRow, startCol, visitedTracker, inputMatrix) {
  visitedTracker[(startRow, startCol)] = true;
  inputMatrix[(startRow, startCol)] = 0;
  if (
    inputMatrix[startRow - 1] !== undefined &&
    inputMatrix[startRow - 1][startCol] === 1
  ) {
    removeIsland(startRow - 1, startCol, visitedTracker, inputMatrix);
  }
  if (
    inputMatrix[startRow + 1] !== undefined &&
    inputMatrix[startRow + 1][startCol] === 1
  ) {
    removeIsland(startRow + 1, startCol, visitedTracker, inputMatrix);
  }
  if (inputMatrix[startRow][startCol - 1] === 1) {
    removeIsland(startRow, startCol - 1, visitedTracker, inputMatrix);
  }
  if (inputMatrix[startRow][startCol + 1] === 1) {
    removeIsland(startRow, startCol + 1, visitedTracker, inputMatrix);
  }
}
