/*
You're given two positive integers representing the width and height of a grid-shaped, rectangular graph. Write a function that returns the number of ways to reach the bottom-right corner of the graph when starting at the top-left corner. Each move you take must either go down or right. In other words, you can never move up or left in the graph.

For example, given the graph illustrated below, with width = 2 and height = 3, there are three ways to reach the bottom-right corner when starting at the top-left corner.
 _ _
|_|_|
|_|_|
|_|_|

1. Down, Down, Right
1. Right, Down, Down
1. Down, Right, Down

Note: You may assume that width * height >= 2. In other words, the graph will neveer be a 1x1 grid.
*/

// MY SOLUTION ATTEMPT (48 min)
class PathInfo {
  constructor(numberOfPaths) {
      this.numberOfPaths = numberOfPaths;
  }
}

function numberOfWaysToTraverseGraph(width, height) {
  let paths = new PathInfo(0);
  let graph = [];
  for (let i = 0; i < height; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push(1);
    }
    graph.push(row);
  }

  const graphTraverser = function(graph, height, width, row, col, paths) {
    while (graph[row][col] === 1) {
      const atBottomRight = row === height - 1 && col === width - 1;
      if (atBottomRight) {
        paths.numberOfPaths++;
        return;
      }
      if (row++ > height - 1 && col++ > width - 1) {
        return;
      } else if (row++ > height - 1) {
        graphTraverser(graph, height, width, row, col++, paths);
      } else if (col++ > width - 1) {
        graphTraverser(graph, height, width, row++, col, paths);
      } else {
        graphTraverser(graph, height, width, row, col++, paths);
        graphTraverser(graph, height, width, row++, col, paths);
      }
      return;
    }
  }
  graphTraverser(graph, height, width, 0, 0, paths);
  return paths.numberOfPaths;
}

// SOURCE SOLUTION 1 (Recursion)
function numberOfWaysToTraverseGraph(width, height) {
  if (width === 1 || height === 1) return 1;
  return numberOfWaysToTraverseGraph(width - 1, height) + numberOfWaysToTraverseGraph(width, height - 1);
}
// Time Complexity: O(2^(n + m))
// Space Complexity: O(n + m)
// n = width and m = height

// SOURCE SOLUTION 2 (Dynamic Programming)
function numberOfWaysToTraverseGraph(width, height) {
  const numberOfWays = [];
  for (let i = 0; i < height + 1; i++) {
    numberOfWays.push([]);
    for (let j = 0; j < width + 1; j++) {
      numberOfWays[i].push(0);
    }
  }
  for (let widthIdx = 1; widthIdx < width + 1; widthIdx++) {
    for (let heightIdx = 1; heightIdx < height + 1; heightIdx++) {
      if (widthIdx === 1 || heightIdx === 1) {
        numberOfWays[heightIdx][widthIdx] = 1;
      } else {
        const waysLeft = numberOfWays[heightIdx][widthIdx - 1];
        const waysUp = numberOfWays[heightIdx - 1][widthIdx];
        numberOfWays[heightIdx][widthIdx] = waysLeft + waysUp;
      }
    }
  }
  return numberOfWays[height][width];
}
// Time Complexity: O(n * m)
// Space Complexity: O(n * m)
// n = width and m = height

// SOURCE SOLUTION 3 (Math)
function numberOfWaysToTraverseGraph(width, height) {
  const xDistanceToCorner = width - 1;
  const yDistanceToCorner = height - 1;
  // The number of permutations of right and down movements
  // is the number of ways to reach the bottom right corner.
  const numerator = factorial(xDistanceToCorner + yDistanceToCorner);
  const denominator = factorial(xDistanceToCorner) * factorial(yDistanceToCorner);
  return Math.floor(numerator / denominator);
}
// Time Complexity: O(n + m)
// Space Complexity: O(1)
// n = width and m = height

function factorial(num) {
  let result = 1;
  for (let n = 2; n < num + 1; n++) {
    result *= n;
  }
  return result;
}