/*
You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only 0's and 1's. Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1's that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1's forming a river determine its size.

Note that a river can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for example.

Write a function that returns an array of the sizes of all rivers represented in the input matrix. The sizes don't need to be in any particular order.
*/

// MY SOLUTION (29 min)
class Size {
  constructor(size) {
    this.size = size;
  }
}

let riverSize = new Size(0);

function riverSizes(matrix) {
  let allRiverSizes = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        allRiverSizes.push(determineSize(matrix, i, j));
        riverSize.size = 0;
      }
    }
  }
  return allRiverSizes;
}
// Time Complexity: O(w*h)
// Space Complexity: O(w*h)
// w = width of matrix
// h = height of matrix

function determineSize(matrix, row, col) {
  const oneStepUp = row - 1;
  const oneStepDown = row + 1;
  const oneStepLeft = col - 1;
  const oneStepRight = col + 1;
  riverSize.size++;
  matrix[row][col] = 0;
  if (matrix[oneStepUp] !== undefined && matrix[oneStepUp][col] === 1) {
    determineSize(matrix, oneStepUp, col);
  }
  if (matrix[oneStepDown] !== undefined && matrix[oneStepDown][col] === 1) {
    determineSize(matrix, oneStepDown, col);
  }
  if (
    matrix[row][oneStepLeft] !== undefined &&
    matrix[row][oneStepLeft] === 1
  ) {
    determineSize(matrix, row, oneStepLeft);
  }
  if (
    matrix[row][oneStepRight] !== undefined &&
    matrix[row][oneStepRight] === 1
  ) {
    determineSize(matrix, row, oneStepRight);
  }
  return riverSize.size;
}

// SOURCE SOLUTION
function riverSizes(matrix) {
  const sizes = [];
  const visited = matrix.map((row) => row.map((value) => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      traverseNode(i, j, matrix, visited, sizes);
    }
  }
  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  let currentRiverSize = 0;
  const nodesToExplore = [[i, j]];
  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];
    if (visited[i][j]) continue;
    visited[i][j] = true;
    if (matrix[i][j] === 0) continue;
    currentRiverSize++;
    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    for (const neighbor of unvisitedNeighbors) {
      nodesToExplore.push(neighbor);
    }
  }
  if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  const unvisitedNeighbors = [];
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j])
    unvisitedNeighbors.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
  if (j < matrix[0].length - 1 && !visited[i][j + 1])
    unvisitedNeighbors.push([i, j + 1]);
  return unvisitedNeighbors;
}

// Time Complexity: O(w*h)
// Space Complexity: O(w*h)
// w = width of matrix
// h = height of matrix
