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